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
    public partial class AuthForm : Form
    {
        public AuthForm()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            var data = new NameValueCollection();
            data.Add("login", textBox1.Text);
            data.Add("password", textBox2.Text);

            string resp = "";

            if(comboBox1.SelectedIndex == 0)
            {
                Form1.Host = "http://localhost:4000";
            }
            else
            {
                Form1.Host = "http://andreifarafonow.duckdns.org:4001";
            }

            try
            {
                resp = POST($"{Form1.Host}/auth/login", null, data);
                dynamic respJson = JObject.Parse(resp);
                Form1.Token = respJson.accessToken;
                Close();
            }
            catch
            {
                MessageBox.Show("Проверьте правильность данных");
            }
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

        private void AuthForm_Load(object sender, EventArgs e)
        {
            comboBox1.SelectedIndex = 0;
        }
    }
}
