using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using MongoDB.Driver.Core.Operations;

namespace zutra_api {
    public class Program {
        public static void Main(string[] args) {
            Settings.Init(new Settings.Props() {
                LvWord = 400,
                MaxCardsPeerDis = 50,
            });
            MongoDb.MongoDb.Init(new MongoDb.MongoDb.Props() {
                Ipv4 = "127.0.0.1",
                Port = -1,
                DbName = "zutra"
            });
            
            Web.Web.Start(new Web.Web.Props() {
                Ipv4 = "127.0.0.1",
                Port = -1,
            }, args);
            
            Discord.Discord.Run(new Discord.Discord.Props() {
                // TODO Write
            });
        }
    }
}