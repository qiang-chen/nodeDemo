//首先我们要读取inndex.html  然后对齐内容添加style 和script

const fs = require("fs");
const path = require("path");

function readCopy(rootPath, filePath) {
    let read = fs.readFileSync(filePath, "utf8");
    let readCss = "<style>";
    readCss += fs.readFileSync(path.join(rootPath, "app/css/style.css"), "utf8");
    readCss += "</style>";
    //遍历js文件夹下面看看能有多少js文件
    let childJs = fs.readdirSync(path.join(rootPath, "app/js"));
    let str="";
    childJs.forEach(item => {
        if (fs.statSync(path.join(rootPath, "app/js", item)).isFile()) {
            //如果是文件的话读取他
            let readJs = "<script>";
            readJs += fs.readFileSync(path.join(rootPath, "app/js/index.js"), "utf8");
            readJs += "</script>";
            str+=readJs
        }
    })
    let res = /(\s)(<\/head>)/g;
    let res1 = /(\s)(<\/body>)/g;

    // read=read.replace("","8888");
    read = read.replace(res, ($0, $1, $2) => {
        return $1 = readCss;
    })
    read = read.replace(res1, ($0, $1, $2) => {
        return $1 = str;
    })
    //创造一个新的html文件 放在week2下面
    fs.writeFileSync(path.join(rootPath,"../","副本.html"),read)
}

readCopy("./src", "./src/index.html")