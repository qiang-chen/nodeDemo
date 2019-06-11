const fs=require("fs");
const path=require("path");

function getfilesize(size) {  //字节转换成文件大小函数封装
    if (!size)
        return "";

    var num = 1024.00; //byte
    if (size < num)
        return size + "B";
    if (size < Math.pow(num, 2))
        return (size / num).toFixed(2) + "K"; //kb
    if (size < Math.pow(num, 3))
        return (size / Math.pow(num, 2)).toFixed(2) + "M"; //M
    if (size < Math.pow(num, 4))
        return (size / Math.pow(num, 3)).toFixed(2) + "G"; //G
    return (size / Math.pow(num, 4)).toFixed(2) + "T"; //T
}

//10MB=10*1024*1024=10485760字节

function copy(rootPath,copyplace){
    //先判断这个需要拷贝的文件是不是存在
    console.log(rootPath,"第二遍进来的")
    if(!fs.existsSync(rootPath))return;
    //if(fs.existsSync(copyplace))return;
    fs.mkdirSync(copyplace);
    //判断要拷贝的这个东西是文件还是文件夹
    if(fs.statSync(rootPath).isDirectory()){
        //如果这个东西是文件的话
        let msg=fs.readdirSync(rootPath);
        console.log(msg,"需要创建的目录下面");
        msg.length&&msg.forEach(item=>{
            let dirPath=path.join(rootPath,item);
            let newCopyPath=path.join(copyplace,item)
            copy(dirPath,newCopyPath)
        })

    }else if(fs.statSync(rootPath).isFile()){
        //如果是文件的话
        //判断这个拷贝的文件大小
        //console.log(getfilesize(fs.statSync(rootPath).size).slice(0,-1))
        console.log("有没有文件进来")
        if(fs.statSync(rootPath).size*1<10485760){
            //问题size怎么读取不出视频还有文件夹的大小
            //如果小于10MB证明是小文件
            console.log("小");
            //读取小文件
            let red=fs.readFileSync(rootPath,"utf8");
             fs.writeFileSync(copyplace,red)

        }else{
            //大于的话证明是大文件
            console.log("大")
        }
    }
    
    
}

copy(path.join("../拷贝文件"),path.join("./副本"))