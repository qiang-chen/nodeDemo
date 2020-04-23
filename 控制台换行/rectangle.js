module.exports = (file, options) => {
    //let {author,createTime,description} = options
    //完成剩余逻辑
    //生成矩形添加给file
    let fs=require("fs");
    let str="*".repeat(10);
    let newStr="";
    for(let i=0;i<10;i++){
        newStr+=str+"\n";
    }
    fs.writeFileSync(file,newStr)
}