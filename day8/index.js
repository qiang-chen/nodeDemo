const filedata = {
    name: 'aa',
    type: 'dir',
    children: [
        {
            name: 'index.js',
            type: 'file',
            children: `console.log('index')`
        },
        {
            name: 'css',
            type: 'dir',
            children: [
                {
                    name: 'style.css',
                    type: 'file',
                    children: `div{width:100px;height:100px}`
                },
                {
                    name: 'common.css',
                    type: 'file',
                    children: `*{padding:0;margin:0;list-style:none}`
                }
            ]
        },
        {
            name: 'mock',
            type: 'dir'
        }
    ]
}

const fs = require("fs");
const path=require('path')
function add(opj){
    if(fs.existsSync(opj.name))return;
    if(opj.type=="dir"){
        let pathChild="./"+opj.name;//这个就跟你刚才写的一样 就变成./aa了
        fs.mkdirSync(opj.name);
        opj.children&&opj.children.forEach(item=>{
            item.name=path.join(pathChild,item.name)
            console.log(item)
            add(item)
        })
    }else if(opj.type=="file"){
        console.log(opj.name)
        //第二次输出怎么变成的aa/css
        fs.writeFileSync(opj.name,opj.children)
    }
}

add(filedata)