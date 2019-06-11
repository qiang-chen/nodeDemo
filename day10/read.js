//此函苏是对目录进行读取的

//我们想要生成的是一个根据目录所创建的json数据

const fs = require("fs");
const path = require("path");

function read(rootPath, name) {
    let opj = {};
    //首先rootPath是我们想要创建的根目录路径 name是对象中的name属性 opj是我们想要生成的对象

    //第一步 我们要先判断下这个文件夹是不是存在
    if (!fs.existsSync(rootPath)) return;
    //第二步我们要判断这个路径是文件还是文件夹
    if (fs.statSync(rootPath).isFile()) {
        //如果是个文件的话 他的children属性就是这个文件内容
        opj.name = name;
        opj.type = "file";
        opj.children = fs.readFileSync(rootPath, "utf8");
    } else if (fs.statSync(rootPath).isDirectory()) {
        //如果是个文件夹的话他的children属性有两种情况 
        //空文件夹下不存在 不是空文件是个数组 数组继续放这些对象

        //首先判断文件夹内容
        let child = fs.readdirSync(rootPath);
        if (child.length) {
            //非空文件夹情况
            opj.name=name;
            opj.type="dir";
            opj.children = child.map(item => {
                let newPath=path.join(rootPath,item);//关键 利用这个方法合并路径
                console.log(newPath)
                return read(newPath,item)
            })
        }else{
            //空文件的情况
            opj.name=name;
            opj.type="dir";
        }
    }
    return opj;
}

let data=read(path.join("./试验品文件"), "./试验品文件");
//大文件写入
let ws=fs.createWriteStream("./data.json")
ws.write(JSON.stringify(data))