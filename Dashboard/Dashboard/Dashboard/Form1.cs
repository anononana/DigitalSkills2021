using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Dashboard
{
    public partial class Form1 : Form
    {
        int currentMonth = 8, currentYear = 2021;

        public static string Token = "";

        public static string Host = "";

        string[] _months = new string[]
        {
            "январь",
            "февраль",
            "март",
            "апрель",
            "май",
            "июнь",
            "июль",
            "август",
            "сентябрь",
            "октябрь",
            "ноябрь",
            "декабрь"
        };

        public Form1()
        {
            InitializeComponent();


        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            
        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            (new AuthForm()).ShowDialog();

            if (Token == "")
            {
                Application.Exit();
                return;
            }

            comboBox1.SelectedIndex = 2;

            var monthsButtons = new Label[]
            {
                label11,
                label12,
                label13,
                label14,
                label15,
                label16,
                label17,
                label18,
                label19,
                label20,
                label21,
                label22
        };

            foreach (var lab in monthsButtons)
            {
                lab.Click += (s, a) =>
                {
                    foreach (var lab2 in monthsButtons)
                    {
                        lab2.BackColor = Color.FromArgb(11, 11, 13);
                    }

                    lab.BackColor = Color.FromArgb(78,18,95);
                    currentMonth = int.Parse(lab.Tag.ToString());
                    ReloadData();
                };
            }
        }

        void ReloadData()
        {
            richTextBox1.Text = "";

            var data = new NameValueCollection();
            data.Add("accessToken", Token);
            data.Add("targetMonth", (currentMonth + 1).ToString());
            data.Add("targetYear", currentYear.ToString());

            string resp = "";
            dynamic respJson;

            try
            {
                resp = POST($"{Form1.Host}/receipt/averageMonthSum", null, data);
                respJson = JObject.Parse(resp);
            }
            catch
            {
                MessageBox.Show("Недостаточно прав");
                Application.Exit();
                return;
            }

            try
            {
                int currentMonthAvg = (int)double.Parse(respJson.currentMonthAvg.ToString().Replace('.', ','));
                int lastMonthAvg = (int)double.Parse(respJson.lastMonthAvg.ToString().Replace('.', ','));

                int delta = (int)((double)(currentMonthAvg - lastMonthAvg) / lastMonthAvg * 100);

                label29.Text = $"{(delta > 0 ? "Больше" : "Меньше")} предыдущего месяца на {Math.Abs(delta)}%";

                label7.Text = currentMonthAvg.ToString() + "₽";
            }
            catch
            {
                label7.Text = "-";
                label29.Text = "";
            }

            label9.Text = $"за {_months[currentMonth]} {currentYear}г";



            resp = POST($"{Form1.Host}/receipt/averageDaySum", null, data);
            dynamic respJson2 = JObject.Parse(resp);

            try
            {
                int currentMonthAvg = (int)double.Parse(respJson2.currentMonthAvg.ToString().Replace('.', ','));
                int lastMonthAvg = (int)double.Parse(respJson2.lastMonthAvg.ToString().Replace('.', ','));

                int delta = (int)((double)(currentMonthAvg - lastMonthAvg) / lastMonthAvg * 100);

                label5.Text = $"{(delta > 0 ? "Больше" : "Меньше")} предыдущего месяца на {Math.Abs(delta)}%";

                label24.Text = currentMonthAvg.ToString() + "₽";
            }
            catch
            {
                label24.Text = "-";
                label5.Text = "";
            }

            label23.Text = $"за {_months[currentMonth]} {currentYear}г";



            resp = POST($"{Form1.Host}/receipt/generalStat", null, data);
            dynamic respJson3 = JObject.Parse(resp);

            try
            {
                label1.Text = $"Потрачено за {_months[currentMonth]} {currentYear}г";
                label2.Text = ((int)double.Parse(respJson3.total.ToString().Replace('.', ','))).ToString() + "₽";
            }
            catch
            {
                label2.Text = "-";
            }

            label23.Text = $"за {_months[currentMonth]} {currentYear}г";

            resp = POST($"{Form1.Host}/receipt/userList", null, data);
            dynamic respJson4 = JArray.Parse(resp);


            foreach (var a in respJson4)
            {
                string line = $"{a.user.name} {a.user.surname} (+{a.overlimit}₽)";
                richTextBox1.Text += line + "\n";
            }

            label28.Text = $"Вышли за лимит ({_months[currentMonth]} {currentYear}г):";


            resp = POST($"{Form1.Host}/receipt/forecast", null, data);
            dynamic respJson5 = JObject.Parse(resp);

            try
            {
                int forecast = (int)respJson5.forecast;
                string chartUrl = respJson5.chart_url.ToString();

                label10.Text = forecast + "₽";

                int o = 0;

                if(pictureBox2.Image != null)
                    pictureBox2.Image.Dispose();

                pictureBox2.Load(chartUrl);

                int crop = 40;

                var croped = cropImage(pictureBox2.Image, new Rectangle(crop, 0, pictureBox2.Image.Width - crop, pictureBox2.Image.Height));


                if (pictureBox2.Image != null)
                    pictureBox2.Image.Dispose();

                for (int x = 0; x < croped.Width; x++)
                {
                    for (int y = 0; y < croped.Height; y++)
                    {
                        var pixel = ((Bitmap)croped).GetPixel(x, y);

                        if (pixel.Name == "ffffffff")
                        {
                            ((Bitmap)croped).SetPixel(x, y, BackColor);
                        }
                    }
                }

                pictureBox2.Image = croped;
            }
            catch
            {
                pictureBox2.Image = null;
                label10.Text = "-";
            }
        }

        private static Image cropImage(Image img, Rectangle cropArea)
        {
            Bitmap bmpImage = new Bitmap(img);
            return bmpImage.Clone(cropArea, bmpImage.PixelFormat);
        }

        public static string POST(string url, WebHeaderCollection headers, NameValueCollection data)
        {
            byte[] respBytes;

            using (var webClient = new WebClient())
            {
                webClient.Headers = headers;

                respBytes = webClient.UploadValues(url, data);

            }

            string response = Encoding.GetEncoding(1251).GetString(respBytes);

            return response;
        }

        private void label29_Click(object sender, EventArgs e)
        {

        }

        private void comboBox1_SelectedIndexChanged_1(object sender, EventArgs e)
        {
            currentYear = int.Parse(comboBox1.Text);
            ReloadData();
        }

        private void pictureBox1_Click_1(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void label11_Click(object sender, EventArgs e)
        {

        }
    }
}
