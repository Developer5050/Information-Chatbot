const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dbConnection = require('./database/dbConnection');
// const dotenv = require('dotenv');
const messageRouter = require('./routes/chatRoutes');
const ChatMessage = require('./models/ChatMessage');



const app = express();
const PORT = 5000;

//Middleware
app.use(cors());
app.use(express.json());

dbConnection();


//Route
app.get("/messages", async (req, res) => {
    try {
        const messages = await ChatMessage.find();
        res.json(messages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



app.post("/messages", async (req, res) => {
    try {
        const { user, message } = req.body;
 
        if (!user || !message) {
            return res
                .status(400)
                .json({ error: "User and message are required" });
        }
 
        const chatMessage = new ChatMessage({
            user,
            message,
        });
 
        await chatMessage.save();
 
        res.status(201).json(chatMessage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


//Api
app.use('/api' , messageRouter);




app.listen(PORT , () =>{
    console.log(`Server is running at port ${PORT}`);
})