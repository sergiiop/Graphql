const MongoClient = require("mongodb").MongoClient;

const{
    DB_USER,
    DB_PASSWD,
    DB_HOST,
    DB_PORT,
    DB_NAME
}=process.env

const uri =
  "mongodb+srv://Sergio:<t6exmpn1ser>@cluster0-l5j1w.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
