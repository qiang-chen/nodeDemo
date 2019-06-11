
const fs = require("fs");
const path = require("path")

function copy(dir, newDir) {
    //首先判断要拷贝的文件是不是存在
    if (!fs.existsSync(dir)) return;
    if (!fs.existsSync(newDir)) {
        //如果这个需要copy的文件不存在就创建他
        fs.mkdirSync(newDir);
        //创建出这个文件夹后再循坏那个需要被拷贝的文件夹下面的东西
        let child = fs.readdirSync(dir);
        child.length && child.forEach(item => {
            let dirs = path.join(dir, item);
            let newDirs = path.join(newDir, item);
            if (fs.statSync(dirs).isDirectory()) {
                console.log(dirs, newDirs)
                copy(dirs, newDirs)
            } else {
                if (fs.statSync(dirs).size * 1 < 10485760) {
                    //如果小于10MB证明是小文件
                    console.log("小");
                    //读取小文件
                    let content = fs.readFileSync(dirs, "utf8");
                    fs.writeFileSync(newDirs, content)

                } else {
                    //大于的话证明是大文件
                    let rs=fs.createReadStream(dirs);
                    let ws=fs.createWriteStream(newDirs);
                    console.log(dirs,"大大大大大大大")
                    rs.pipe(ws)
                }

            }

        })
    }
}

copy(path.join("./试验品文件"), path.join("./试验品文件副本"))