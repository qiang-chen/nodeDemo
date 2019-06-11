const express=require("express");
const path=require("path");
const util=require("../util/util")
const Router=express.Router();

Router.get("/data",(req,res)=>{
    let {page}=req.query;
    //读取数据
    util.fileRead(path.join(__dirname,"../mock/list.json")).then(data=>{    
            //console.log(data.slice(page*3,3*(page+1)),"77777888")
            console.log(page)
            console.log(page*3,3*(page*1+1))
            res.send(data.slice(page*3,3*(page*1+1)))
    })
})


module.exports=Router;