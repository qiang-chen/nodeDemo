const http = require("http");
const fs = require("fs");
const Mock = require("mockjs");
const path = require("path")
//封装一个读取文件的函数 用来给读取http的静态文件资源

function readFile(filePath, response) {
    //首先判断这个文件是不是存在
    console.log(fs.existsSync(filePath),"判断文件是否存在")
    if (fs.existsSync(filePath)) {
        //如果这个文件存在的话就读取这个文件
        fs.readFile(filePath, ((error, data) => {
            console.log(error,"---------error")
            if (error) throw error;
            console.log(data,"-------data")
            response.end(data);//将请求到的东西返回
        }))
    } else {
        //如果页面找不到的情况下
        response.statusCode = 404;
        response.statusMessage = "not find zhe ge wen jian"
        response.end()
    }
}

const serve = http.createServer((request, response) => {
    let fileName = request.url == "/" ? "index.html" : request.url;
    if (path.extname(fileName)) {
        console.log(fileName,"-----------")
        readFile(path.join("./", fileName), response)
    } else {
        console.log("ajax进入通道")
        if (fileName == "/api/text") {
            let data = Mock.mock(
                {
                    "list|10": [
                        {
                            title: "@ctitle",
                            name: "@cname"
                        }
                    ]
                }
            )
            response.end(JSON.stringify(data))
        }
    }
    // if(request.url=="/"){
    //    readFile(path.join("./",fileName),response)
    // }else if(request.url=="/css/index.css"){
    //     readFile(path.join("/",fileName),response)
    // }else if(request.url=="/js/index.js"){
    //     readFile(path.join("./",fileName),response)
    // }else if(request.url=="/api.text"){
    //     let data=Mock.mock(
    //         {
    //             "list|10":[
    //                 {
    //                     title:"@ctitle",
    //                     name:"@cname"
    //                 }
    //             ]
    //         }
    //     )
    //     response.end(JSON.stringify(data))
    // }
});

//监听8000这个端口
serve.listen(8000, () => {
    console.log(8000)
})