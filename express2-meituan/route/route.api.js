
//这个文件是处理所有api接口的路由
const express=require("express");

const Router=express.Router();
const fs=require("fs");
const path=require("path")

//问题 这里为什么不能进来下
Router.get("/",(req,res)=>{
    //重定向
    res.redirect("/api/login")
})

Router.post("/login",(req,res)=>{
    console.log(req.body,"33333")
    let opj={
        code:1,
        msg:"用户登录成功"
    }
    //获取数据库的数据
    //注意这里要写绝对路径
    let arr=JSON.parse(fs.readFileSync(path.join(__dirname,"../mock","data.json"),"utf8"));
    let flag=arr.find(item=>item.user==req.body.user);
    if(flag){
        //存在的情况下在判断密码是不是相等
        if(flag.pwd!=req.body){
            opj.code=0;
            opj.msg="账号或者密码输入不正确"
        }
    }else{
        //不存在的情况下
        opj.code=0;
        opj.msg="该用户还没有注册"
    }
    res.send(opj)
})



module.exports=Router;