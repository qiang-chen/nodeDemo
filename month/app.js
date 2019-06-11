const express=require("express");
const app=express();
const path=require("path")

//挂载静态资源中间件
app.use(express.static(path.join(__dirname,"public")));

//挂载处理post请求的中间件
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//设置ejs搜索引擎与根目录
app.set("view enginne","ejs");
app.set("views",path.join(__dirname,"views"))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","login.html"))
})

//登录注册页面的路由  注意路由是use  忘了四遍没脑子！！
const verifyRoute=require("./route/verify")
app.use("/verify",verifyRoute)


//处理主页面的请求 
const list=require("./route/listRouter");
app.use("/list",list)

//处理编辑和新增点过来的api请求

const apiRouter=require("./route/apiRouter")
app.use("/api",apiRouter)

//处理增删改过来的请求

const dataRouter=require("./route/dataRouter.js");
app.use("/data",dataRouter)


//设置端口
app.listen(8000,()=>{
    console.log("port is 8000")
})