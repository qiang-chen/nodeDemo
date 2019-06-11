const express=require("express");
const app=express();
const path=require("path")
const listData=require("./mock/data").list
//处理默认请求
const fs=require("fs");
//fs.writeFileSync(path.join(__dirname,"../server/mock/data.json"),JSON.stringify(listData))
//设置ejs引擎

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

app.get("/api/data",(req,res)=>{
    //console.log(req.query);
    let {page,list}=req.query;
    let data=listData.slice((page-1)*list,page*list);
    res.send(data)
})

//接受点击每一项发送详情页

app.get("/details/:id",(req,res)=>{
   let {id}=req.params;
   //读取文件 让文件返回一个文件
   let newData=listData.find(item=>item.id==id);
   if(newData){
        res.render("detail.ejs",{
            code:1,
            newData
        })
   }else{
       res.render("detail.ejs",{
           code:0,
           newData:"暂无数据"
       })
   }
  
})

//接受编辑页面过来的请求
app.get("/edit",(req,res)=>{
    let {id}=req.query;
})


app.listen(3000,()=>{
    console.log("port is 3000")
})