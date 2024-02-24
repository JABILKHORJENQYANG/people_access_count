const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//server variable
let count = 0

app.get("/",(req,res)=>{
    count = count + 1
    res.send(`${count} People Access this server`);
})

app.listen(port,()=>{
    console.log(`listening to port ${port} ...`)
})