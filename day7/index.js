const fs=require("fs");

// fs.mkdir("./文件夹",(error)=>{
//     if(error)return;
//     console.log("创建成功")
// })

// fs.rmdir("./文件夹",(error)=>{
//     if(error){
//         console.log(error,"报错信息")
//         return ;
//     }
//     console.log("删除成功")
// })

//fs.mkdirSync("./同步文件夹")
//fs.writeFileSync("./同步文件夹/a.txt","我是同步创建出来的文档")

// fs.rmdir("./同步文件夹",(error)=>{
//     if(error){
//         console.log(error.message,"报错信息")
//     }
// })

//console.log(fs.existsSync("./nzs"))

// function deletes(path){
//     if(fs.existsSync(path)){
//         fs.unlink(path,(error)=>{
//            if(error){
//             console.log(error);
//             return;
//            }
//            console.log("删除成功")
//         })
//     }else{
//         console.log("文件并不存在")
//     }
// }
// deletes("./同步文件夹/a.txt")
// fs.writeFile("./同步文件夹/a.txt",(error)=>{
//     if(error){
//         return error;
//     }
// })

fs.stat("../day7",(error,mas)=>{
    if(error)return;
    console.log(mas)
    console.log(mas.isDirectory())
    console.log(mas.isFile())
})