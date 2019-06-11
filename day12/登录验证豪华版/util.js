const url = require("url");
const fs = require("fs");
module.exports={
    fileRead(rootPath,response){
        //此函数是对文件的读取 与判断文件是否存在滴
        if(fs.existsSync(rootPath)){
            //文件存在的情况 读取返回
            fs.readFile(rootPath,(err,data)=>{
                if(err) throw err;
                response.end(data.toString())
            })
        }else{
            //文件不存在的情况下 改状态码
            response.ststusCode=404;
            response.end()
        }
    },
    getData(request,callBack){
        //第一个参数是请求体 第二个参数是回调函数
        //封装一个函数用来判断是get请求还是post请求
        if(request.method==="POST"){
            let data="";
            request.on("data",chunk=>{
                data+=chunk;
            });
            request.on("end",()=>{
                callBack(data)
            })
        }else if(request.method=="GET"){
            //注意这里第二个参数加个true可以 很有灵性
            //将page=1&limit=15转换成对象 方便了后端人员的数据处理
            let data=url.parse(request.url,true).query;
            callBack(data)
        }
    }
}