const url=require("url");
module.exports={
    getData(req,ck){
        if(req.method==="POST"){
            let data="";
            req.on("data",chunk=>{
                data+=chunk;
            });
            req.on("end",()=>{
                ck(JSON.parse(data))
            })
        }else if(req.method==="GET"){
            let data=url.parse(req.url,true).query;
            ck(data)
        }
    }
}