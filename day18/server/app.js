const express = require("express");
const app = express();
const util = require("./util/util");
const path = require("path")

//挂载post请求中间件
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//接受端口的请求

//设置ejs中间件
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.get("/api/list", (req, res) => {
    //读取数据给前端返回
    util.fileRead(path.join(__dirname, "mock", "data.json")).then(data => {
        
        res.send({
            data
        })
    })
})


//接受点击编辑过来的数据
app.get("/api/add/:id", (req, res) => {
    let { id } = req.params;
    util.fileRead(path.join(__dirname, "mock", "data.json")).then(data => {
        if (data[id]) {
            res.render("home.ejs", {
                titles:"编辑列表",
                code: 1,
                data: data[id]
            })
        } else {
            res.render("home.ejs", {
                code: 0,
                data: {}
            })
        }

    })
})

//接受编辑之后的数据请求
app.post("/api/edit",(req,res)=>{
    let {id}=req.body;
    delete req.body.id;
    util.fileRead(path.join(__dirname, "mock", "data.json")).then(data => {
        data.splice(id,1,req.body)
        util.fileWrite(path.join(__dirname,"mock","data.json"),JSON.stringify(data)).then(()=>{
            res.send({
                code:1,
                msg:"更改成功"
            })
        })
    })
    
})

//接受删除按钮过来的请求

app.get("/api/del",(req,res)=>{
    let {list}=req.query;
    util.fileRead(path.join(__dirname, "mock", "data.json")).then(data => {
        data.splice(list,1)
        util.fileWrite(path.join(__dirname,"mock","data.json"),JSON.stringify(data)).then(()=>{
            res.send({
                code:1,
                msg:"删除成功"
            })
        })
    })
})

//接受新增按钮传过来的请求

app.get("/add",(req,res)=>{
    res.render("home.ejs",{
        titles:"新增页面",
        code:1,
        data:{}
    })
})

//接受新增按钮传过来的请求

app.post("/api/add",(req,res)=>{
    util.fileRead(path.join(__dirname, "mock", "data.json")).then(data => {
        data.push(req.body)
        util.fileWrite(path.join(__dirname,"mock","data.json"),JSON.stringify(data)).then(()=>{
            res.send({
                code:1,
                msg:"删除成功"
            })
        })
    })
})



//设置端口
app.listen(3000, () => {
    console.log("port is 3000")
})