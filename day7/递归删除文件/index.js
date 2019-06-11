
//递归删除a这个文件夹

const fs=require("fs");
function deleteDir(fillPath){
    let mas=fs.readdirSync(fillPath);
    if(mas.length){
        //此时mas得到是里面第一层的一个数组 循坏遍历判断每一项是文件还是文件夹
        for(let i=0;i<mas.length;i++){
            let flag=fs.statSync(fillPath+"/"+mas[i]);
            if(flag.isFile()){
                fs.unlinkSync(fillPath+"/"+mas[i])
                console.log("文件")
            }else if(flag.isDirectory()){
                deleteDir(fillPath+"/"+mas[i])
            }
        }
    }
    fs.rmdirSync(fillPath)
}

deleteDir("./a")