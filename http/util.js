const fs = require("fs")
module.exports = {
    fileRead(rootPath, response) {
        if (fs.existsSync(rootPath)) {
            fs.readFile(rootPath, (err, data) => {
                if (err) throw err;
                response.end(data)
            })
        }else{
            response.statusCode=404;
            response.end()
        }
    }
}