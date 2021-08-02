/*
swmgdb2021user
4I9AmvKfzRZ74Fqt
*/

const mongoClient = require('mongodb').MongoClient;
let _db;
const userName = process.env.MONGODBUSER;//'swmgdb2021user';
const password = process.env.MONGODBPSWD; //'4I9AmvKfzRZ74Fqt';
const mongohost = process.env.MONGOHOST; //cluster0.scm82.mongodb.net
const mongodb = process.env.MONGODB;
const mongoUri = `mongodb+srv://${userName}:${password}@${mongohost}/${mongodb}?retryWrites=true&w=majority`;
const mongoParams = { useUnifiedTopology: true };

class MongoDB{
    static async getDB(){
      if (!_db) {
        try {
          let client = await mongoClient.connect(
            mongoUri,
            mongoParams
          );
          _db = client.db(mongodb);
          return _db;
        } catch (ex){
          console.log(ex);
          throw(ex);
        }
      } else {
        return _db;
      }
    }
  }
  
  module.exports = MongoDB;