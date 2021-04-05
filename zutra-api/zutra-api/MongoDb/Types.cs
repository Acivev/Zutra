using System;
using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;

namespace zutra_api.MongoDb {
    public static class Types {
        public static class Db {
            public static string? Name;
        }
        
        public class Player {
            [BsonId] public Object _id { get; set; }
            public string? Name { get; set; } // Discord = LoginUsername
            public List<string>? Cards { get; set; } // Card.Hash
            public int Lv { get; set; }
            public int WordsWrite { get; set; }  
            public int Packs { get; set; }
            public bool IsAdmin { get; set; }
            public bool IsRegistInWeb { get; set; }
            public string? PasswdHash { get; set; }
            public List<string>? Cookies { get; set; }
            public bool CardMode { get; set; }
            
            public string AddANDGetCookieInDd() {
                throw new NotImplementedException("AddCookieInDd");
            }
            
            public bool EqCookie(string cookie) {
                if (Cookies is null) return false;
                
                foreach (var s in this.Cookies) {
                    if (s != cookie) continue;
                    return true;
                }
                
                return false;
            } 
        }
        
        public class DisGroup {
            [BsonId] public Object _id { get; set; }
            public string? Name { get; set; }
            public string? Hash { get; set; } // Name + Time // Sha256
        }
        
        public class Card {
            [BsonId] public Object _id { get; set; }
            public string? Name { get; set; }
            public string? DisGroupHash { get; set; } // Sha256
            public string? Hash { get; set; } // DisGroup.Hash + Name + Time  // Sha256 
            public byte[]? Image { get; set; }
            public byte[]? ImageLow { get; set; }
            public string? Des { get; set; }
        }
    }
}