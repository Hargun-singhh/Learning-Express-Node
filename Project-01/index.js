const express = require("express")
const {logGen} = require("./middleware/index")
const {connectMongoDb} = require("./connection")
const userRouter = require("./routes/user")
const app = express();
const port = 8000;

connectMongoDb("mongodb://127.0.0.1:27017/test-app1").then(()=>console.log("MongoDb Connected :) ")); // Connection with MongoDb

app.use(express.urlencoded({extended: false}));
app.use(logGen("logs.txt"));

app.use('/users',userRouter);


app.listen(port,()=> console.log("Sever Connected :) at 8000"))
