const express = require("express")
const urlRoute = require("./routes/url")
const app = express();
const URL = require('./model/url')
const {connectToMongodb} =require("./connection")

connectToMongodb('mongodb://127.0.0.1:27017/shorturl').then(()=>console.log("MongoDb Connected :)"));
app.use(express.json());
app.use("/url",urlRoute);
app.get("/:shortId",async (req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId
        }
    ,
    { $push:{
        vistHistory:{
            timestamp: Date.now(),
        },
    },
  
    }
    );


    res.redirect(entry.ogUrl);
});


app.listen(8001,()=>console.log("Server Started at 7001 :) "));