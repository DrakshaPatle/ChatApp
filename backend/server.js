const express = require ("express");
const dotenv = require ("dotenv");
const connectDB = require("./config/db");
const {chats} = require ("./data/data")
const app = express();
dotenv.config();
connectDB();



app.get("/",(req,res)=>{
    res.send("API is Running");
});


// app.get("/api/chat",(req,res)=>{
//     res.send(chats);
// });
// app.get("/api/chat/:id",(req,res)=>{
//     // console.log(req);
//     // console.log(req.params.id )

//     const singleChat=chats.find((c=>c._id===req.params.id));
//     res.send(singleChat);
// });


api.use('/api/user',useRoutes)

const PORT =process.env.PORT|| 5000
app.listen(5000,console.log ("Server Started at port no ${PORT}"))

