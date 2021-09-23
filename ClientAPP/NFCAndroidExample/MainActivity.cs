using System;
using System.Collections.Specialized;
using System.Linq;
using System.Net;
using System.Runtime.Remoting.Metadata.W3cXsd2001;
using System.Text;
using Android.App;
using Android.Content;
using Android.Content.PM;
using Android.Nfc;
using Android.Nfc.Tech;
using Android.OS;
using Android.Runtime;
using Android.Support.V7.App;
using Android.Views;
using Android.Widget;
using Newtonsoft.Json.Linq;

namespace NFCAndroidExample
{
    [Activity(Label = "@string/app_name", Theme = "@style/AppTheme.NoActionBar", MainLauncher = true, ScreenOrientation = ScreenOrientation.Portrait)]
    [IntentFilter(new[] { NfcAdapter.ActionNdefDiscovered, NfcAdapter.ActionTagDiscovered, Intent.CategoryDefault })]
    public class MainActivity : AppCompatActivity
    {
        private NfcAdapter _nfcAdapter;

        string Token = "";

        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);
            Xamarin.Essentials.Platform.Init(this, savedInstanceState);
            SetContentView(Resource.Layout.activity_main);
            //Set NFC Adapter
            _nfcAdapter = NfcAdapter.GetDefaultAdapter(this);

            FindViewById<LinearLayout>(Resource.Id.plash).Visibility = ViewStates.Visible;

            FindViewById<TextView>(Resource.Id.sum).Text = "ИТОГО:";
            FindViewById<Button>(Resource.Id.send).Text = "ЗАПРОСИТЬ ПОДТВЕРЖДЕНИЕ КАССИРА";

            FindViewById<Button>(Resource.Id.ok).Click += (s, e) => 
            {
                var sendData = new NameValueCollection();
                sendData.Add("login", FindViewById<TextView>(Resource.Id.login).Text);
                sendData.Add("password", FindViewById<TextView>(Resource.Id.pass).Text);

                string resp = POST("http://andreifarafonow.duckdns.org:4000/auth/login", null, sendData);

                JObject respJson = JObject.Parse(resp);
                Token = respJson["accessToken"].ToString();

                FindViewById<LinearLayout>(Resource.Id.plash).Visibility = ViewStates.Gone;
                FindViewById<LinearLayout>(Resource.Id.lay).Visibility = ViewStates.Visible;

                FindViewById<TextView>(Resource.Id.fullName).Text = respJson["user"]["name"].ToString() + " " + respJson["user"]["surname"].ToString();
                FindViewById<TextView>(Resource.Id.time).Text = DateTime.Now.ToString("MM/dd/yyyy H:mm");

                ReloadHistory();

                FindViewById<Button>(Resource.Id.send).Click += (s2, e2) => 
                {
                    FindViewById<TextView>(Resource.Id.waiter).Visibility = ViewStates.Visible;
                };

            };

            
        }

        protected override void OnResume()
        {
            base.OnResume();

            if (_nfcAdapter == null)
            {
                var alert = new Android.App.AlertDialog.Builder(this).Create();
                alert.SetMessage("NFC is not supported on this device.");
                alert.SetTitle("NFC Unavailable");
                alert.Show();
            }
            else
            {
                //Set events and filters
                var tagDetected = new IntentFilter(NfcAdapter.ActionTagDiscovered);
                var ndefDetected = new IntentFilter(NfcAdapter.ActionNdefDiscovered);
                var techDetected = new IntentFilter(NfcAdapter.ActionTechDiscovered);
                var filters = new[] { ndefDetected, tagDetected, techDetected };

                var intent = new Intent(this, GetType()).AddFlags(ActivityFlags.SingleTop);

                var pendingIntent = PendingIntent.GetActivity(this, 0, intent, 0);

                // Gives your current foreground activity priority in receiving NFC events over all other activities.
                _nfcAdapter.EnableForegroundDispatch(this, pendingIntent, null, null);
            }
        }

        /// <summary>
        /// If there's a new detection OnNewIntent will catch it
        /// </summary>
        /// <param name="intent"></param>
        protected override void OnNewIntent(Intent intent)
        {
            //if (intent.Action != NfcAdapter.ActionTagDiscovered) return;
            var myTag = (Tag)intent.GetParcelableExtra(NfcAdapter.ExtraTag);
            if (myTag == null) return;


            // Extra: Check if there's any Ndef message
            var rawMessages = intent.GetParcelableArrayExtra(NfcAdapter.ExtraNdefMessages);
            if (rawMessages == null) return;
            var msg = (NdefMessage)rawMessages[0];
            // Get NdefRecord which contains the actual data
            var record = msg.GetRecords()[0];
            if (record == null) return;
            // The data is defined by the Record Type Definition (RTD) specification available from http://members.nfc-forum.org/specs/spec_list/
            if (record.Tnf != NdefRecord.TnfWellKnown) return;
            // Get the transmitted data
            var data = Encoding.ASCII.GetString(record.GetPayload());

            var sendData = new NameValueCollection();
            string num = data.Substring(3);
            if(num == "2")
            {
                var sendDat = new NameValueCollection();
                sendDat.Add("sum", FindViewById<EditText>(Resource.Id.sumInput).Text);
                string date = DateTime.Now.ToString("yyyy-MM-ddTHH:mm:ss");
                sendDat.Add("date", date);
                sendDat.Add("accessToken", Token);

                string resp = POST("http://andreifarafonow.duckdns.org:4000/receipt/create", null, sendDat);

                FindViewById<TextView>(Resource.Id.waiter).Visibility = ViewStates.Gone;

                ReloadHistory();
            }
        }

        void ReloadHistory()
        {

            var sendDat = new NameValueCollection();
            sendDat.Add("accessToken", Token);

            string resp = POST("http://andreifarafonow.duckdns.org:4000/receipt", null, sendDat);
            JObject respJson = JObject.Parse(resp);

            var textView = FindViewById<TextView>(Resource.Id.history);

            textView.Text = "";

            foreach (var a in respJson["receipts"])
            {
                

                var sum = a["sum"].ToString();
                var date = a["printDate"].ToString();

                textView.Text += "Сумма: "+sum + "     " + date + "\n";
            }
            
            int o = 0;
        }

        public static string POST(string url, WebHeaderCollection headers, NameValueCollection data)
        {
            byte[] respBytes;

            using (var webClient = new WebClient())
            {
                webClient.Headers = headers;

                respBytes = webClient.UploadValues(url, data);

            }

            string response = Encoding.UTF8.GetString(respBytes);

            return response;
        }

        /// <summary>
        /// In my case card id values returned as reversed hex format.
        /// To solve that problem need to convert reversed hex to hex.
        /// </summary>
        /// <param name="num"></param>
        /// <returns></returns>
        private static string LittleEndian(string num)
        {
            var number = Convert.ToInt32(num, 16);
            var bytes = BitConverter.GetBytes(number);
            return bytes.Aggregate("", (current, b) => current + b.ToString("X2"));
        }

        /// <summary>
        ///  Below a code snippet for writing to a discovered tag. This method can be called when a new intent (tag discovered) has been fired.
        /// I'm using the Ndef class to the actual writing of the data to the tag.
        /// The first step is to create the different parts payload, record, and the Ndef message which will be written on the tag.
        /// Don't forget to call the Connect method before writing to the tag, otherwise, an exception will be thrown.
        /// </summary>
        /// <param name="intent">Current intent</param>
        /// <param name="content">Your Message</param>
        public void WriteToTag(Intent intent, string content)
        {
            if (!(intent.GetParcelableExtra(NfcAdapter.ExtraTag) is Tag tag)) return;
            Ndef ndef = Ndef.Get(tag);
            if (ndef == null || !ndef.IsWritable) return;
            var payload = Encoding.ASCII.GetBytes(content);
            var mimeBytes = Encoding.ASCII.GetBytes("text/plain");
            var record = new NdefRecord(NdefRecord.TnfWellKnown, mimeBytes, new byte[0], payload);
            var ndefMessage = new NdefMessage(new[] { record });

            ndef.Connect();
            ndef.WriteNdefMessage(ndefMessage);
            ndef.Close();
        }

        public static string ByteArrayToString(byte[] ba)
        {
            var shb = new SoapHexBinary(ba);
            return shb.ToString();
        }

        public override bool OnCreateOptionsMenu(IMenu menu)
        {
            MenuInflater.Inflate(Resource.Menu.menu_main, menu);
            return true;
        }

        public override bool OnOptionsItemSelected(IMenuItem item)
        {
            var id = item.ItemId;
            return id == Resource.Id.action_settings || base.OnOptionsItemSelected(item);
        }

        public override void OnRequestPermissionsResult(int requestCode, string[] permissions, [GeneratedEnum] Android.Content.PM.Permission[] grantResults)
        {
            Xamarin.Essentials.Platform.OnRequestPermissionsResult(requestCode, permissions, grantResults);

            base.OnRequestPermissionsResult(requestCode, permissions, grantResults);
        }
    }
}