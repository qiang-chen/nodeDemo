const fs=require("fs");
module.exports={
    readFile(rootpath){
        return new Promise((resolve,reject)=>{
            if(!fs.existsSync(rootpath))return;
            fs.readFile(rootpath,(err,data)=>{
                if(err){
                    reject()
                }else{
                    resolve(data)
                }
            })
        })
    }
}