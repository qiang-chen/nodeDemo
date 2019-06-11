
const express=require("express");
const Router=express.Router();
const util=require("../util/util");
const path=require("path")
//登录页面传来的路由处理
Router.post("/login",(req,res)=>{
    let {user,pwd}=req.body;
    let opj={
        code:1,
        msg:"登陆成功"
    }
    util.fileRead(path.join(__dirname,"../mock/data.json")).then(data=>{
        //遍历这个得到的数据 看是否有相同的
        let newData=data.find(item=>item.user==user);
        if(newData){
            if(!(newData.pwd==pwd)){
                opj.code=0;
                opj.msg="密码账号不对"
            }
        }else{
            opj.code=0;
            opj.msg="用户不存在"
        }
        res.send(opj)
    });
});

//注册页面发来的路由处理

Router.post("/register",(req,res)=>{
    //先把数据库原来的数据读取出来放在一个数组中
    let opj={
        code:1,
        msg:"注册成功"
    }
    let {user,pwd}=req.body;
    util.fileRead(path.join(__dirname,"../mock/data.json")).then(data=>{
        let newData=data.find(item=>item.user==user);
        if(newData){
            opj.code=0;
            opj.msg="注册失败，该账号已经存在"
        }else{
            data.push({user,pwd});
            util.fileWrite(path.join(__dirname,"../mock/data.json"),JSON.stringify(data))
        }
        res.send(opj)
    })
})


module.exports=Router;