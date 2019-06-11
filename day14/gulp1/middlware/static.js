const url = require('url');
const fs = require('fs');
const path = require('path');
module.exports = (req,res,next)=>{
    //这里写静态文件逻辑
    let filePath=req.url=="/"?"index.html":url.parse(req.url).pathname;
    //判断是还是接口
    
    if(path.extname(filePath)){
        //文件的情况
        //两种情况 文件存在和不存在
        if(fs.existsSync(path.join("src",filePath))){
            //存在
            
            let read=fs.readFileSync(path.join("src",filePath));
            res.end(read)
        }else{
            //不存在
            res.statusCode=404;
            //错了
            //res.Message="NO"
            res.setHeader("content-type","text/html;charset=utf8");
            res.end("路径错误")
        }
    }else{
        //接口情况
        
        next()
    }
}