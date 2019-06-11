const express = require("express");
const app = express();
const path = require("path");
const Mock = require("mockjs")

//现在有一个需求是先做登录注册假如成功就跳到列表页ejs中

//挂载处理post传来参数的中间件

app.use(express.json())
app.use(express.urlencoded({extended:false}))



//那么我们默认让他一访问端口先进去登录页面

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"public","login.html"))
})

//处理api接口的路由 加载路由文件
//引入    注意加载中间件一定要用use！！！！
const apiRouter=require("./route/route.api.js")
app.use("/api",apiRouter)



//加载静态资源中间件
app.use(express.static(path.join(__dirname, "public")));
app.set("view enginne","ejs")//设置ejs使用的模板引擎来解析试图

//设置根路径  //写了后下面的render就可以直接写index.ejs 
app.set("views",path.join(__dirname,"views"))

//不写的话 就需要path.join(__dirname,"views", "index.ejs")

// app.get("/", (req, res) => {
//     let images = Mock.Random.image("50x50", "#eee", "chen");
//     res.render("index.ejs", {
//         data: Mock.mock({
//             [`list|8`]: [{
//                 title: '@ctitle',
//                 'id|+1': 1,
//                 img: images
//             }]
//         })
//     });
// })

app.get("/detail/:id",(req,res)=>{
    console.log(req.params,"777777")
})

//列表进入 
//获取数据库的数据
let data=require("./detail")
app.get("/detail",(req,res)=>{
    console.log(req.query);
    let newData=data.find(item=>item.id==req.query.id)||{
        id:-1,
        title:"数据没有找到"
    };
    res.render("detail.ejs",newData)
})


app.listen(8000, () => {
    console.log("port is 8000")
})