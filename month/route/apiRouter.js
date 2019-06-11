
const express = require("express");
const Router = express.Router();
const path = require("path");
const util = require("../util/util")

//编辑过来的路由
Router.get("/edit", (req, res) => {
    let { id } = req.query;
    //读取数据
    util.fileRead(path.join(__dirname, "../mock/list.json")).then(data => {
        res.render("edit.ejs",{
            title:"编辑页面",
            data:data[id]
        })
    })
})

//新增过来的路由
Router.get("/add", (req, res) => {
        res.render("edit.ejs",{
            title:"新增页面",
            data:{}
        })
})

module.exports = Router;