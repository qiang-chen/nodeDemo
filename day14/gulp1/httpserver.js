const http=require("http");

const path=require("path");
const url=require("url")
const server=http.createServer((request,response)=>{
    let filePath=url.parse(request.url).pathname;
    console.log(filePath)
    if(filePath=="/api/aa/"){
        response.end("hello")
    }
    
})

server.listen(3000,()=>{
    console.log("port is 3000")
})