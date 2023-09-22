const dotenv = require('dotenv');
dotenv.config({path:'./.env'});
const express = require('express');
const app = express();
const connectDB = require('./db');

connectDB();

app.use(express.json());

app.get('/', (req,res)=>{
    res.send("Server Health Check, API is working !!");
})

module.exports = app;