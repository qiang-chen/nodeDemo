const http = require("http");
const fs = require("fs");
const url=require("url");
const path = require("path");
const util = require("./util");
const Mock = require("./src/app/mock/node_modules/mockjs");

//创建一个服务
let arr = [];//用来存放下面建立的json文件的数据
const server = http.createServer((request, response) => {
    //首先我们会接受静态请求和接口请求 通过封装函数来实现对其不同的操作
    //首先我们对请求进行分类
    let filePath = request.url == "/" ? "login.html" : url.parse(request.url).pathname;
    //console.log(filePath)
    if (path.extname(filePath)) {
        //存在后缀就是静态资源文件请求
        util.fileRead(path.join("./src", filePath), response)
    } else if (filePath == "/api/login") {

        //声明一个对象给前端返回后端处理的数据请求结果

        let opj = {
            code: 1,
            msg: "请求成功"
        }
        //接受前端给我发过来的请求体
        util.getData(request, (data) => {
            console.log(data, "前端请求数据结果")
            //登录的ajax请求
            //我们利用一个json文件模拟本地数据库
            //首先判断我们这个数据库存在不存在
            if (fs.existsSync("./data.json")) {
                //存在的情况下
                //和数据库的数据进行比较
                //读取数据库文件资源
                let dataAll = JSON.parse(fs.readFileSync("./data.json", "utf8"));
                data = JSON.parse(data)
                //console.log(data, "dengluqingqiu............")
                //检验是不是账号密码不对
                let flag = dataAll.find(item => {
                    return item.user == data.user && item.pwd == data.pwd;
                });
                let flag1 = dataAll.find(item => {
                    return item.user == data.user;
                })
                //console.log(flag, "**************")
                //检测是不是这个名字就不存在了
                if (!flag) {
                    //找不到证明验证失败
                    opj.code = 0;
                    opj.msg = "用户名或者密码输入错误"
                }
                if (!flag1) {
                    opj.code = 0;
                    opj.msg = "该用户没有被注册"
                }

            } else {
                //不存在的情况下
                opj.code = 0;
                opj.msg = "该用户没有被注册"
            }
            //返回后端处理结果
            //console.log(JSON.stringify(opj))
            //console.log(opj, "--------------------")
            response.end(JSON.stringify(opj))
        })
    } else if (filePath == "/api/register") {
        //声明一个对象给前端返回后端处理的数据请求结果
        let opj = {
            code: 1,
            msg: "注册成功"
        }
        //注册页面发来的ajax请求
        //接受ajax传过来的数据
        util.getData(request, data => {
            //console.log(data, "前端请求数据结果")
            console.log(data, "这里")
            data = JSON.parse(data);
            let f = arr.some(item => {
                return item.user == data.user
            })
            if (!f) {
                arr.push(data);
            }
            //首先在这个请求中我们还是利用一个json文件代替数据库
            //判断这个文件是不是存在 不存在创建
            if (!fs.existsSync("./data.json")) {
                //不存在的情况下
                //创建
                if (arr.length) {
                    fs.writeFileSync("./data.json", JSON.stringify(arr));
                }
            } else {
                //存在的情况下
                //获取这个文件收据进行遍历
                let read = JSON.parse(fs.readFileSync("./data.json", "utf8"));
                let flag = read.some(item => {
                    return item.user == data.user
                });
                if (flag) {
                    opj.code = 0;
                    opj.msg = "该用户已被注册过"
                }
                fs.writeFileSync("./data.json", JSON.stringify(arr));
            }
            response.end(JSON.stringify(opj))
        })

    } else if (filePath === "/api/main") {
        util.getData(request,data=>{
            //console.log(data,"**********");
            let {page,limit}=data;
            //利用mock随机生成图片
            let images=Mock.Random.image("200x200","#f00","chen");
            //利用传过来的参数随机生成一个数据给前端返回回去
            let mockData=Mock.mock({
                [`list|${limit}`]:[
                    {
                        title:'@ctitle',
                        'id|+1':(page-1)*limit,
                        img:images
                    }
                ]
            });
            //将这个随机创造的数据返回给前端
            response.end(JSON.stringify(mockData))
        })
    }
});

//监听这个服务
server.listen(8000, () => {
    console.log(server.address().port)
})