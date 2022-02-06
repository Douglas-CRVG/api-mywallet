import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
await mongoClient.connect();

const db = {
    users: mongoClient.db("MyWallet").collection("users"),
    sessions: mongoClient.db("MyWallet").collection("sessions"),
    records: mongoClient.db("MyWallet").collection("records")
};

export default db;