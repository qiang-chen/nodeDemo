const http=require("http");
const path=require("path");
const fs=require("fs");
const url=require("url");
//封装一个函数读取文件
let f=null;
function readFile(rootPath,response){
    //首先判断这个路径是不是存在
    if(fs.existsSync(rootPath)){
        //存在的情况就读取他
        fs.readFile(path.join(rootPath),(error,data)=>{
            if(error) throw error;
             response.end(data);
        })
    }else{
        //不存在这个文件的情况
        //把其状态改成404;
        response.statusCode=404;
        response.statusMessage="not found";
        response.end();
    }
}


const server=http.createServer((request,response)=>{
    let filePath=request.url=="/"?"login.html":request.url;
    if(filePath=="/favicon.ico"){
        console.log("图标请求")
        response.end(fs.readFileSync("./app/img/icon.ico"));
    }

    //通过判断filePath的后缀来判断是不静态文件或者是ajax请求或者是文件夹
    if(path.extname(filePath)){
        //存在的情况是静态文件
        readFile("../src/"+filePath,response)
    }else if(filePath=="/api/login"){
        //接受浏览器向服务器发送的数据请求
   
        if(f){
            response.end(result(f))
            
        }else{
            response.end("")
        }
        //封装一个遍历数据的函数像用户返回请求结果
    }else if(filePath=="/api/add"){
        let data="";
        request.on("data",chunk=>{
           
            data+=chunk;
        })
        request.on("end",()=>{
            f=JSON.parse(data);
        })
    }
});

server.listen(8000,()=>{
    console.log(server.address().port)
})

//遍历数据函数

//let arr=JSON.parse(localStorage.arr);
//console.log(arr)

function result(arr){
    return "1";
}