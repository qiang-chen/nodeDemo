const http=require("http");
const url=require("url");
const util=require("./util")
const server=http.createServer((request,response)=>{
    console.log(request.url,"9999")
    let filePath=url.parse(request.url).pathname;
    
    //读取文件
    //封装一个读取文件的函数
    console.log(filePath)
    console.log(888)
    switch (filePath){
        case "/api/list/":
        util.readFile("./mock/smallData.json").then((res)=>{
            let pathName=url.parse(request.url,true).query;
    let data=pathName.id;
            res=JSON.parse(res.toString());
            let newdata=res.filter(item=> item.bid==data);
            response.end(JSON.stringify(newdata))
        })
        break;
        case "/api/big/":
        util.readFile("./mock/bigData.json").then(res=>{
            response.end(res.toString())
        })
        break;
        case "/api/data/":
        util.readFile("./mock/data.json").then((res)=>{
            let pathName=url.parse(request.url,true).query;
            let data=pathName.id;
            res=JSON.parse(res.toString());
            let newdata=res.filter(item=> item.sid==data);
            response.end(JSON.stringify(newdata))
        })
        break;
    }
    
    
});

server.listen(3000,()=>{
    console.log(`port is ${server.address().port}`)
})