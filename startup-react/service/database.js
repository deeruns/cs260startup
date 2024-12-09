const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

// mongo setup
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
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
