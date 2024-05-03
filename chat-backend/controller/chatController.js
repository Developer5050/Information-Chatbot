// const chatMessage = async (req, res,) =>{
//    try {
//     console.log('error is here')
//     const { user , message, timestamp} = req.body;

//     if( !user || !message, !timestamp) {
//         return res.status(400).json("User and message are required!")
//     }

//     const chatMess = new chatMess({
//         user,
//         message,
//     });

//     await chatMess.save();

//     res.status(201).json(chatMess);
    
//    } catch (error) {
//       console.error(error);
//       res.status(500).json({error : 'Internal Server Error'});
//    }
// }

// module.exports = chatMessage;