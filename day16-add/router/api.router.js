const express=require("express");
const Router=express.Router();
const util=require("../util/util")
const path=require("path");
Router.get("/del",(req,res)=>{
    let {id}=req.query;
    let data;
    //又有问题 这里为什么不能是相对路径！！！

    // util.fileRead("../mock/data.json").then(res=>{
    //     data=JSON.parse(res);
    //     data.splice(id,1)
    // })

    util.fileRead(path.join(__dirname,"../mock","data.json")).then(r=>{
        data=JSON.parse(r);
        data.splice(id,1);
        util.fileWrite(path.join(__dirname,"../mock","data.json"),JSON.stringify(data)).then(()=>{
            res.send({
                code:1,
                mas:"success"
            })
        })
    })
})

//编辑内容发送过来的请求

Router.post("/editdata",(req,res)=>{
    let {arr,id}=req.body;
    console.log(arr,id);
    //读取文件
    util.fileRead(path.join(__dirname,"../mock/data.json")).then(r=>{
        let data=JSON.parse(r);
        data.splice(id.id,1,arr);
        util.fileWrite(path.join(__dirname,"../mock","data.json"),JSON.stringify(data)).then(()=>{
            res.send({
                code:1,
                mas:"success"
            })
        })
    })
})

//新增页面发送过来的请求
Router.post("/adddata",(req,res)=>{
    let {arr,id}=req.body;
    console.log(arr,id);
    //读取文件
    util.fileRead(path.join(__dirname,"../mock/data.json")).then(r=>{
        let data=JSON.parse(r);
        data.push(arr);
        util.fileWrite(path.join(__dirname,"../mock","data.json"),JSON.stringify(data)).then(()=>{
            res.send({
                code:1,
                mas:"success"
            })
        })
    })
})


module.exports=Router;