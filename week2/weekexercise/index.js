const data = require("./data.js");
const fs = require("fs")
const path = require("path");
function creat(data) {
    let rootPath = path.join(data.filename);
    if (fs.existsSync(rootPath)) return;
    if (data.isFile) {
        //是文件的情况下
        fs.writeFileSync(rootPath, data.children);

    } else {
        //文件夹的情况下
        fs.mkdirSync(rootPath)
        let child = data.children;
        child.length && child.forEach(item => {
            item.filename = path.join(rootPath, item.filename);
            creat(item)
        })
    }
}

function read(rootPath, fillname) {
    //查找目录abc
    let opj = {};
    if (!fs.existsSync(rootPath)) return;
    
    //判断传入的是文件还是文件夹
    if (fs.statSync(rootPath).isFile()) {
        //是文件的情况下
        opj.filename = fillname;
        opj.children = null;
        opj.isFile = true;
        opj.singlePath = rootPath;
    } else if (fs.statSync(rootPath).isDirectory()) {
        let child = fs.readdirSync(rootPath);
        if (child.length) {
            opj.filename = fillname;
            opj.isFile = false;
            opj.singlePath = rootPath;
            opj.children=child.map(item => {
                let newPath = path.join(rootPath, item);
                console.log(newPath)
                return read(newPath, item)
            })
        }

    }
    return opj
}

let t = read(path.join("./abc"), "abc");

fs.writeFileSync("./data1.json", JSON.stringify(t))

