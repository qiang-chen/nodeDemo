const express = require("express");
const path = require("path");
const app = express();

//加载封装的第三方模块
const util = require("./util/util")

//加载静态资源文件
app.use(express.static(path.join(__dirname, "public")))

//设置views的主入口文件和编译
app.set("view enginne", "ejs")
app.set("views", path.join(__dirname, "views"))

//加载请求处理post的中间件
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//改变入口文件
//引入列表数据
app.get("/", (req, res) => {
    let data;
    util.fileRead("./mock/data.json").then(r => {
        data = JSON.parse(r);
        res.render("home.ejs", {
            title: "主页面",
            data
        })
    });

})

//接受新增地址传过来的请求

app.get("/add", (req, res) => {
    //加载那个添加新地址页面
    res.render("edit.ejs", {
        code: 1,
        mas: "添加新地址",
        newData:[]
    })
})

//接受编辑过来的请求

app.get("/edit", (req, res) => {
    //获取点击编辑传过来的数据从而取到数据库中的这一项参数
    //此时我们需要封装一个模块用来里面的函数来读取数据库的数据
    //而不能直接用require把这个模块引进来 原因是这个模块引进来的
    //东西会进行缓存从而对下面把这个数据库改变后没法实时刷新
    //当然在express中他会自动给我们清缓存 但是其他的地方就不会了

    //去封装一个util函数 来读取文件
    let data;
    util.fileRead("./mock/data.json").then(r => {
        data = JSON.parse(r);
        let { id } = req.query;
        if (data[id]) {
            res.render("edit.ejs", {
                code: 1,
                mas: "编辑地址",
                newData: data[id]
            })
        }else{
            res.render("edit.ejs", {
                code: 0,
                mas: "编辑地址",
                newData:"暂没有数据喽"
            })
        }

    })
})

//整一个api的路由专门处理api的请求 分别包括删除添加修改
//引过路由文件来
//又智障了  路由一定要用use加载 记住！！！！
const Router=require("./router/api.router.js");
app.use("/api",Router)

//起服务
app.listen(8000, () => {
    console.log("port is 8000")
})