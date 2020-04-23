const fs=require("fs");

let rs=fs.createReadStream("./css");
let ws=fs.createWriteStream("./css2");
rs.pipe(ws)