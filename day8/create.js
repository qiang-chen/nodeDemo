const fs = require("fs");
const path=require("path")
function creat(rootPath,name) {
   let opj={};
   //首先判断这个文件夹是不是存在
   if(!fs.existsSync(rootPath))return;
   //如果存在判断他是一个文件还是一个文件夹
   if(fs.statSync(rootPath).isDirectory()){
       //如果是文件夹的话
       opj.name=name;
       opj.type="dir";
       //是文件夹的children有两种 情况 一种是数组里面有好多对象 另外是没有这个属性
       //根据这个文件夹下面是否有元素来判断
       let child=fs.readdirSync(rootPath);
       if(child.length){
           //有元素的情况下
           //在判断下面的元素是不是文件或者是文件夹 递归循坏
           opj.children=child.map(item=>{
               return creat(path.join(rootPath,item),item)
           })
       }
   }else if(fs.statSync(rootPath).isFile()){
       //是文件的情况下
       opj.name=name;
       opj.type="file";
       opj.children=fs.readFileSync(rootPath,"utf8")
   }
   return opj
}
let a=creat(path.join("aa"),"aa");
a=JSON.stringify(a);
fs.writeFileSync("./data.json",a)