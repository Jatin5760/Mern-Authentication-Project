import express from 'express';
import {config} from  'dotenv';
import cookieParser from 'cookie-parser';
import cors from "cors";


export const app = express();
config({path: "./config.env"});

app.use(cors({
    //origin: ["URL1", "URL2"] //These are frontend urls
    origin: [process.env.FRONTEND_URL],
    methods:["GET", "POST", "PUT", "DELETE"],
    credentials:true,
}))

app.use(cookieParser());
app.use(express.json()); // Data parsing ke kaam ata hai
app.use(express.urlencoded({extended:true}))