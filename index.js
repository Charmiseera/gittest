const express = require('express');
const app = express();
const path = require('path');
const port=8080;
app.set('view engine','ejs');
app.set("views",path.join(__dirname,"/views"));
app.get('/',(req,res)=>{
    res.render('home.ejs');
    
});
app.get("/hello",(req,res)=>{
    res.send("Hello World");
});
app.get("/rolldice",(req,res)=>{
    let num=Math.floor(Math.random()*6)+1;
    res.render('rolldice.ejs',{num:num});
   
}
);
app.get("/ig/:username",(req,res)=>{
   const instaData = require("./data.json");
   console.log(instaData);
    res.render('ig.ejs',{insta:instaData});
});
app.get("/task",(req,res)=>{
    let t=["eat",'sleep',"study"];
    res.render('task.ejs',{tasks:t});
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
