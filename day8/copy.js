// var fs = require('fs');
 
// function copy(src, dst) {
//   fs.createReadStream(src).pipe(fs.createWriteStream(dst));
// }
 
// function main(argv) {
//   copy(argv[0], argv[1]);
// }
 
// main(process.argv.slice(2));

let fs=require("fs");

let read=fs.createReadStream('../../../pc录屏/陈强周考一.mp4');
read.on("data",chunk=>{
    console.log(chunk)
})

fs.readFile("../../../pc录屏/陈强周考一.mp4",(error,data)=>{
    if(error){
        console.log(error);
        return;
    }
    fs.writeFileSync("./aa",data)
})
