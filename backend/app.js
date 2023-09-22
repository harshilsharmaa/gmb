const dotenv = require('dotenv');
dotenv.config({path:'./.env'});
const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const connectDB = require('./db');

connectDB();

// Middlewares
app.use(express.json());
app.use(cookieParser());

app.get('/', (req,res)=>{
    res.send("Server Health Check, API is working !!");
})

// Importing Routes
const authRouter = require('./routes/auth.router');
const userRouter = require('./routes/user.router');

// Using Routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

module.exports = app;