const { MongoClient } = require('mongodb');

const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

const dbName = 'world';

const db = client.db(dbName);
const collection = db.collection('country');

module.exports = {

    /* INSERT ONE country */
    async insertCountry(country) {
      await client.connect();

      const insertResult = await collection.insertOne(country);
      console.log('Inserted document =>', insertResult);
    },

    /* READ ONE country */
    async retrieveCountry(country) {
        await client.connect();
      
        const findResult = await collection.find({"name": country}).toArray();
      
        return findResult;
      }
    
}
