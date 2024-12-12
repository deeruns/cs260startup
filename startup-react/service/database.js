const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

// mongo setup
const url = "mongodb+srv://davin:davindee14@cluster0.fm6k4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(url);
const db = client.db('simon');

// Collections
const userCollection = db.collection('user');
const scoreCollection = db.collection('score');

// test mongo
(async function testConnection() {
  try {
    await client.connect();
    await db.command({ ping: 1 });
    console.log("Successfully connected to the database.");
  } catch (ex) {
    console.error(`Unable to connect to database: ${ex.message}`);
    process.exit(1);
  }
})();

// User Functions
async function getUser(email) {
    return userCollection.findOne({ email: email });
  }
  
  async function getUserByToken(token) {
    return userCollection.findOne({ token: token });
  }
  
  async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = {
      email: email,
      password: passwordHash,
      token: uuid.v4(),
    };
    await userCollection.insertOne(user);
    return user;
  }
    //update
    async function updateScore(name, score) {
        const result = await scoreCollection.updateOne(
          { name: name },         
          { $inc: { score: score } }, 
          { upsert: true }
        );
        return result;
      }
      
      //get score
      async function getScores() {
        return scoreCollection.find({}).toArray();
      }
      
      module.exports = {
        getUser,
        getUserByToken,
        createUser,
        updateScore,  // Added export
        getScores,    // Added export
      };
  