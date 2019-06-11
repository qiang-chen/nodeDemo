
//增删改过来的路由

const express = require("express");
const Router = express.Router();
const path = require("path");
const util = require("../util/util");

//增
Router.post("/add",(req,res)=>{
    util.fileRead(path.join(__dirname, "../mock/list.json")).then(data => {
       data.push(req.body);
       util.fileWrite(path.join(__dirname,"../mock/list.json"),JSON.stringify(data)).then(()=>{
           res.send({
               code:1
           })
       })
    })
});

//改
Router.post("/edit/:id",(req,res)=>{
    let {id}=req.params;
    util.fileRead(path.join(__dirname, "../mock/list.json")).then(data => {
        data.splice(id,1,req.body)
        util.fileWrite(path.join(__dirname,"../mock/list.json"),JSON.stringify(data)).then(()=>{
            res.send({
                code:1
            })
        })
     })
})

//删
Router.get("/del",(req,res)=>{
    let {id}=req.query;
    util.fileRead(path.join(__dirname, "../mock/list.json")).then(data => {
        data.splice(id,1)
        util.fileWrite(path.join(__dirname,"../mock/list.json"),JSON.stringify(data)).then(()=>{
            res.send({
                code:1
            })
        })
     })
})

module.exports=Router;