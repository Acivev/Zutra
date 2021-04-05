namespace zutra_api {
    public static class Settings {
        public static int LvWord { get; private set; }
        public static int MaxCardsPeerDis { get; private set; }
        public static int RerrDropPerz1 { get; private set; }
        public static int RerrDropPerz2 { get; private set; }
        public static int RerrDropPerz3 { get; private set; }
        public static int RerrDropPerz4 { get; private set; }
        public static int RerrDropPerz5 { get; private set; }
        public static int RerrDropPerz6 { get; private set; }
        public static int PackSize { get; private set; }
        
        public struct Props {
            public int LvWord;
            public int MaxCardsPeerDis;
        }
        public static void Init(Props prop) {
            LvWord = prop.LvWord;
            MaxCardsPeerDis = prop.MaxCardsPeerDis;
        } 
    }
}