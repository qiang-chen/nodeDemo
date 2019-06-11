
const express = require("express");
const app = express();
const path = require("path");
//引进封装第三方模块
const util = require("./util/util")
//挂载加载静态资源文件路由中间件
app.use(express.static(path.join(__dirname, "public")));

//设置views的主入口文件以及编译
app.set("views", path.join(__dirname, "views"))
app.set("view enginne", "ejs")

//挂载处理post请求的中间件
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//改变初始文件入口

app.get("/", (req, res) => {
    util.fileRead(path.join(__dirname, "mock", "list.json")).then(data => {
        res.render("list.ejs", {
            code: 1,
            list: data
        })
    })

})

//封装读取文件函数util


//接受前端传过来的添加数据请求

app.post("/api/add", (req, res) => {
    //先读取数据
    util.fileRead(path.join(__dirname, "./mock/list.json")).then(data => {
        let newData = data;
        data.push(req.body);
        util.fileWrite(path.join(__dirname, "./mock/list.json"), JSON.stringify(newData)).then(() => {
            res.send({
                code: 1,
                msg: "数据添加成功"
            })
        })
    })
})

//接受详情页面的api

app.get("/api/edit/:id", (req, res) => {
    //先读取数据

    let { id } = req.params;

    util.fileRead(path.join(__dirname, "./mock/list.json")).then(data => {
        let newData = data[id];
        if (newData) {
            res.render("edit.ejs", {
                code: 1,
                newData
            })
        } else {
            res.render("edit.ejs", {
                code: 0,
                newData: "暂时没有数据"
            })
        }
    })
})



//起个端口服务

app.listen(8000, () => {
    console.log("part is 8000")
})