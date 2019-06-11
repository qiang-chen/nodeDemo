module.exports = (file)=>{
    //let {author,createTime,description} = options
    //完成剩余逻辑
    let fs=require("fs");
    let str="";
    for(let i=0;i<10;i++){
        for(let k=0;k<9-i;k++){
            str+=" ";
        }

        for(let j=0;j<=(2*i-1)+1;j++){
            str+="*";
        }
        str+="\n";
    }
    fs.writeFileSync(file,str);
}