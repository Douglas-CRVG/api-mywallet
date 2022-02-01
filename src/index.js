import express from "express";
import cors from "cors";
import joi from "joi";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
dotenv.config()


const server = express();
server.use(cors());
server.use(express.json())

const mongoClient = new MongoClient(process.env.MONGO_URI);