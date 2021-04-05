namespace zutra_api.Web.Controllers {
    public static class WebOutputMain {
        public class OutUserLogin {
            public string Cookie { get; set; }
            public bool Error { get; set; }
            public string ErrorUser { get; set; }
            public string ErrorPasswd { get; set; }
        }
        
        public class OutUserMode {
            public bool Mode { get; set; }
        }
    }
}