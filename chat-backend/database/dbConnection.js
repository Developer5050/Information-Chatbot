const mongoose = require('mongoose');
// import mongoose from "mongoose";
require('dotenv').config();


const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName : "ChatRoom",
    })
    .then(()=>{
        console.log('Database Connecting Successfully!');
      }).catch((err)=>{
          console.log(`Some error occured while connecting to database! ${err}`);
      })
};

module.exports = dbConnection;
