const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.post("/saveData",(req,res)=>{
    const Name = req.body.name;
    const age = req.body.age;
    console.table(Name,age);
    res.send("DATA CAME IN BACKEND");

})

app.listen(7001,()=>{
    console.log("Running at 7001");
})