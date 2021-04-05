using System;

namespace zutra_api.Web.Controllers {
    public static class WebInputMain {
        public class InUserLogin {
            public string ProfileName { get; set; }
            public string Passwd { get; set; }

            public string GetPasswdHash() {
                throw new NotImplementedException("GetPasswdHash");
            }
        }
        
        public class InUserMode {
            public bool Mode { get; set; }
            public string ProfileName { get; set; }
            public string Cookie { get; set; }
        }
    }
}