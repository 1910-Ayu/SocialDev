const express = require('express');
const ConnectDB = require('./config/db');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

ConnectDB();
app.listen("5000",()=>{
    console.log("server up and running!")
});