using MongoDB.Driver;
using types = zutra_api.MongoDb.Types;
namespace zutra_api.MongoDb {
    public static class Builder {
        private static IMongoDatabase GetDb() {
            // TODO Write GetDb
            return new MongoClient().GetDatabase(types.Db.Name);
        }
        public static IMongoCollection<Types.Card> GetCollCard() =>
            GetDb().GetCollection<types.Card>("Card");

        public static IMongoCollection<Types.Player> GetCollPlayer() =>
            GetDb().GetCollection<types.Player>("Player");

        public static IMongoCollection<Types.DisGroup> GetCollDisGroup() => 
            GetDb().GetCollection<Types.DisGroup>("DisGroup");
    }
}