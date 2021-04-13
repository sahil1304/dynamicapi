const { response } = require('express');
const express = require('express')
const bodyParser = require('body-parser')
const port=3000;
const offirebase =require("./firebase/setData");

const app  = express();
app.use(bodyParser.json())

app.listen(port,function(){
    
        console.log("connected");
});

app.get('/home',(req,res)=>{
 res.json({success: true})
})

app.post("/savedata/",function(req,res){
    offirebase.saveData(req.body,function(err,data){
        res.send(data);
    })
})



