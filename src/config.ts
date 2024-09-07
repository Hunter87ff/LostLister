import { MongoClient } from "mongodb";
import process from "process"
import * as dotenv from 'dotenv';

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || "";

export async function get_db(){
    const client = new MongoClient(MONGO_URI);
    await client.connect();
    return client.db("Database");
}


interface Item {
    id: number;
    created_at: Date;
    details: string;
    resolved: boolean;
    owner?: string; // Optional owner property
    founded_by: string;
    founded_at: string; // Consider changing type if it's not a valid date format
    reports: number;
  }
  
export const items_data_model: Item[] = [
    {
      id: 7823547234,
      created_at: new Date(), // Assuming datetime.datetime.now() translates to a Date object
      details: "32gb pendrive, red color",
      resolved: true,
      owner: "bwubca23654",
      founded_by: "bwubca22245",
      founded_at: "ub6_314",
      reports: 0,
    },
  ];

