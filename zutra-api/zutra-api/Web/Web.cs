using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace zutra_api.Web {
    public static class Web {
        public struct Props {
            public string Ipv4;
            public int Port;
        }
        
        public static void Start(Props props, string[] args) {
            new Task(() => { CreateHostBuilder(args).Build().Run(); }).Start();
        }
        
        private static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder => { webBuilder.UseStartup<Startup>(); });
    }
}