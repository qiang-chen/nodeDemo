const express=require("express");
const app=express();
const Mock=require("mockjs")
const path=require("path")
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")



app.get("/",(req,res)=>{
    res.render("index.ejs",{
        title:"hello",
        bb:"我好",
        list:[
            {
                a:"1号"
            },
            {
                a:"2号"
            },
            {
                a:"3号"
            }
        ]
    })
})


app.use(express.static(path.join(__dirname,"public")))






// app.get("/list/page",(req,res)=>{
//     res.json(
//         Mock.mock({
//             'data|10':[
//                 {
//                     title:"@ctitle",
//                 }
//             ]
//         })
//     )
// })

app.listen(3000,()=>{
    console.log("port is 3000")
})