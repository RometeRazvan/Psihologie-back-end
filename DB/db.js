const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri ="mongodb+srv://psiho:1234@cluster0.qfoyi.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     await client.connect();

//     //get entries from psiho collection users
//     const collection = client.db("psiho").collection("users");
//     const result = await collection.find({}).toArray();
//     console.log(result);

//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// make a functions that returns a connection to the db
const connect = async () => {
    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    return client;
};

// //export connect
module.exports = connect;
