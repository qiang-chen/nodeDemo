
const fs=require("fs");


// //异步创建文件
// fs.writeFile("./a.tet","你好啊",(error)=>{
//     if(error){
//         return ;
//     }
//     console.log("成功")
// })

// //同步创建文件
// fs.writeFileSync("./b.tet","我是b文件");

// //异步追加文件内容
// fs.appendFile("./a.tet","我是c文件",(error)=>{
//     if(error){
//         return ;
//     }
//     console.log("appendFile追加成功")
// })
// //同步追加内容文件
// fs.appendFileSync("b.tet","我是给b增加的内容");

// fs.mkdir('./aaaa.tet',(error)=>{
//     if(error){
//         return ;
//     }
//     console.log("创建目录成功")
// })

// //删除文件
// fs.unlink('./a.tet',(error)=>{
//     if(error){
//         return ;
//     }
//     console.log("删除成功")
// })

// fs.readFile("./b.tet","utf8",((error,data)=>{
//     if(error){
//         return ;
//     }
//    console.log(data)
// }))

// let content=fs.readFileSync("./c.tet","utf8");
// console.log(content,"同步读取数据")

console.log(process.cwd(),"打印当前程序的根目录")