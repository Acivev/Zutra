using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using zutra_api.MongoDb;
using WIn = zutra_api.Web.Controllers.WebInputMain;
using WOut = zutra_api.Web.Controllers.WebOutputMain;

#nullable enable
namespace zutra_api.Web.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase {
        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger) {
            _logger = logger;
        }

        [HttpPost("/api/main/login")]
        public WOut.OutUserLogin PostLogin(WIn.InUserLogin? loginData) {
            WOut.OutUserLogin CreateError(WOut.OutUserLogin data, string throwMsg) {
#if DEBUG
                throw new Exception(throwMsg);
#else
                return data;
#endif
            }

            if (String.IsNullOrEmpty(loginData.Passwd))
                return CreateError(new WebOutputMain.OutUserLogin() {
                    Error = true,
                    ErrorPasswd = "Password is false",
                }, "loginData.Passwd is Null or Empty");
            if (String.IsNullOrEmpty(loginData.ProfileName))
                return CreateError(new WebOutputMain.OutUserLogin() {
                    Error = true,
                    ErrorUser = "ProfileName is false",
                }, "loginData.ProfileName is Null or Empty");

            var found = false;
            Types.Player player = null;
            {
                var builder = MongoDB.Driver.Builders<Types.Player>.Filter;
                var filter = builder.Eq(x => x.Name, loginData.ProfileName);
                filter &= builder.Eq(x => x.PasswdHash, loginData.GetPasswdHash());

                player = MongoDb.Builder.GetCollPlayer().Find(filter).First();
                
                if (player is not null) {
                    found = true;
                }
            }

            if (!found) {
                return CreateError(new WebOutputMain.OutUserLogin() {
                    Error = true,
                    ErrorPasswd = "Password can be false",
                    ErrorUser = "Username can be false"
                }, "Passwd Or Name is false");
            }

            var cookie = player.AddANDGetCookieInDd();
            return new WebOutputMain.OutUserLogin() {
                Cookie = cookie,
                Error = false,
            };
        }

        [HttpPost("/api/settings/mode")]
        public WOut.OutUserMode? PostMode(WIn.InUserMode? mode) {
            WOut.OutUserMode? Exist(string throwMsg) {
#if DEBUG
                throw new Exception(throwMsg);
#else
                return null;
#endif
            }
            if (mode is null) return null;
            var builder = MongoDB.Driver.Builders<Types.Player>.Filter;
            var find = builder.Eq(x => x.Name, mode.ProfileName);

            var player = Builder.GetCollPlayer().Find(builder.Eq(x => x.Name, mode.ProfileName)).First();
            
            if (player is null) return Exist("Player Not Found");
            if (!player.EqCookie(mode.Cookie)) return Exist("Cookie not Same");
            
            Builder.GetCollPlayer().UpdateOne(
                Builders<Types.Player>.Filter.Eq(x => x.Name, mode.ProfileName),
                Builders<Types.Player>.Update.Set(x => x.CardMode, mode.Mode)
                );
        }
    }
}




































 