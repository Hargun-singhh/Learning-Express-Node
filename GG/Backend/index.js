const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let a = [10,20,30,40,50,60];

app.get("/data", (req, res) => {
    return res.json(a);
});

app.post("/", (req, res) => {
    const { item } = req.body;
    console.log(item);
    if (item) {
      a.push(item); 
      res.json({ message: 'Item added successfully!', data: a });
    } else {
      res.status(400).json({ message: 'Invalid item!' });
    }
});

app.post("/search", (req, res) => {
    const { item } = req.body;
    const index = a.indexOf(item);
    console.log(index);
    if (index === -1) {
      res.json({ message: 'Item not found!', index: -1 });
    } else {
      res.json({ message: 'Item found at index', index });
    }
});

app.delete("/delete/:index",(req,res)=>{
  const { index } = req.params;
  a.splice(index, 1);
  res.json({ message: 'Item deleted successfully.' });
})

app.put("/update/:index",(req,res)=>{
  const { index } = req.params;
  const { item } = req.body;
  a[index] = item;
  res.json({message: 'Item updated successfully.'})
})



app.listen(8001, () => console.log("Server started at 8001"));
