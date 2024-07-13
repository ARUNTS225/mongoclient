const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbName = 'guvidb'
const dbUrl =`mongodb+srv://arunts:Arun123@cluster0.gtofnkt.mongodb.net//${dbName}`

const client = new MongoClient(dbUrl)


module.exports = {
    mongodb,
    client,
    dbName
}