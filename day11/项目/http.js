const fs=require("fs");
const http=require("http");
const path=require("path");

const Mock=require("mockjs")

function fillPath(fill,response){
    //先判断这个文件是不是存在
    //存在的话把他加载到页面中 不存在把状态改成404
    if(fs.existsSync(fill)){
        //存在的情况 读取文件加载到页面
        let read=fs.readFile(fill,(err,data)=>{
            if(err)throw err;
            response.end(data)
        })
    }else{
        //不存在的时候返回一个404
        response.statusCode = 404;
        response.statusMessage = "not find zhe ge wen jian"
        response.end();
    }
}

const serve=http.createServer((request,response)=>{
    //我们需要通过 request判断浏览器发来的是什么请求
    let fillPaths=request.url=="/"?'index.html':request.url;
    console.log(fillPaths,path.extname(fillPaths),"***************")
    if(path.extname(fillPaths)){
        console.log(path.join("./src",fillPaths),"触发进来的路径")
        //如果后缀名存在话就是静态文件加载
        fillPath(path.join("./src",fillPaths),response)
    }else{
        //不存在就是ajax请求
        console.log(fillPaths)
        if(fillPaths=="/api/text0"){
            let data=Mock.mock({
                "list|10":[{
                    num:"111",
                    title:"@ctitle",
                    name:"@cname"
                }]
            })
            response.end(JSON.stringify(data))
        }else if(fillPaths=="/api/text1"){
            let data=Mock.mock({
                "list|10":[{
                    num:"222",
                    title:"@ctitle",
                    name:"@cname"
                }]
            })
            response.end(JSON.stringify(data))
        }else if(fillPaths=="/api/text2"){
            let data=Mock.mock({
                "list|10":[{
                    num:"333",
                    title:"@ctitle",
                    name:"@cname"
                }]
            })
            response.end(JSON.stringify(data))
        }
    }
})

//监听 浏览器的触发
serve.listen(8000,()=>{
    console.log(8000)
})