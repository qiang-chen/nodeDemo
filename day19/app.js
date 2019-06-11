const express=require("express");
const app=express();
const path=require("path")
const util=require("./util/util")
//设置ejs引擎
app.set("view engine","ejs");
//设置目录
app.set("views",path.join(__dirname,"views"));

//挂载加载静态资源中间件

app.use(express.static(path.join(__dirname,"public")))

//设置默认加载请求
app.get("/",(req,res)=>{
    //读取数据给返回
    util.fileRead(path.join(__dirname,"mock","data.json")).then(data=>{
        res.render("list.ejs",{
            code:0,
            data
        })
    })
    
})

//接受tap切换传过来的数据

app.get("/switch",(req,res)=>{
    let {tap}=req.query;
    
    util.fileRead(path.join(__dirname,"mock","data.json")).then(data=>{
        
        res.render("list.ejs",{
            code:tap,
            data
        })
    })
})

app.listen(8000,()=>{
    console.log("port is 8000")
})