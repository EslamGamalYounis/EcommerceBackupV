const express = require("express");
const path = require("path");
const app =express();

app.use(express.static(path.join(__dirname+'/dist/template')));
let port =process.env.PORT||4200;

app.listen(port);


app.get("/*",(req,res)=>{
  res.sendFile(path.join(__dirname+"/dist/template/index.html"))
})
