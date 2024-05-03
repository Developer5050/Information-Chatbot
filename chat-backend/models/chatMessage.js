const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
    user:{
        type: String,
        required : true
    },
    message:{
        type : String,
        required : true,
    },
    timestamp:{
        type: Date,
        default : Date.now,
    },  
});

const ChatMessage = new mongoose.model('ChatMessage' , chatMessageSchema);

module.exports = ChatMessage;