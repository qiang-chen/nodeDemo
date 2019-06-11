
const fs=require("fs");

module.exports={
    fileRead(rootpath){
        //异步读取这个文件吧
        return new Promise((resolve,reject)=>{
            fs.readFile(rootpath,"utf8",(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(data)
                }
            })
        })
    },
    fileWrite(rootpath,data){
        return new Promise((resolve,reject)=>{
            fs.writeFile(rootpath,data,(err)=>{
                if(err){
                    throw err;
                }
                resolve()
            })
        })
    }
}