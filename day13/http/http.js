const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const util = require("./util");
// const Mock = require("./src/app/mock/node_modules/mockjs");

//创建一个服务
let arr = [];//用来存放下面建立的json文件的数据
const server = http.createServer((request, response) => {
    let filePath = request.url == "/" ? "index.html" : request.url;
    if (path.extname(filePath)) {
        //静态文件
        util.fileRead(path.join("./src/app", filePath), response);
    } else if (filePath == "/api/login") {
        let opj = {
            code: 1,
            msg: "登陆成功"
        }
        let data = "";
        request.on("data", chunk => {
            data += chunk;
        })

        request.on("end", () => {
            console.log(data)
            if (fs.existsSync("./data.json")) {
                //存在
                let arr = JSON.parse(fs.fs.readFileSync("./data.json"));
                let flag = arr.find(item => {
                    return item.user == data.user && item.pwd == data.pwd
                });
                if (!flag) {
                    opj.code = 0,
                        opj.msg = "该用户没有注册"
                }
            } else {
                opj.code = 0,
               opj.msg = "该用户没有注册"
            }
            response.end(JSON.stringify(opj))
        })

    } else {
        //接口

    }
});

//监听这个服务
server.listen(8000, () => {
    console.log(server.address().port)
})