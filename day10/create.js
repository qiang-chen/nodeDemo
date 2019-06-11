
const fs = require("fs");
const path = require("path");
const data = require("./data.js");

function create(data) {
    //先根据数据创造出最外层文件夹
    //首先判断这个文件夹存在不存在 不存在创建 存在不创建
    let rootPath = data.name;
    //console.log(fs.existsSync(rootPath))
    if (fs.existsSync(rootPath))return;
    //不存在的情况 先创建
    //创建之前判断我们是想创建文件还是文件夹
    //console.log(data,"----")
    if (data.type=="dir") {
        //文件夹的情况
        fs.mkdirSync(rootPath);
        //创建完了最外层目录后 对数据的children属性进行循坏
        data.children&&data.children.forEach(item => {
            //循坏能得到每一个对象 然后递归在执行
            //递归之前有个问题是路径问题 我们需要更改下name的名字
            item.name=path.join(rootPath,item.name);
            //console.log(item,"------------------------------------")
            create(item)
        })
    }else if(data.type=="file"){
        //文件的情况
        fs.writeFileSync(rootPath,data.children);
    }

}
create(data.data)