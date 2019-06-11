var fs = require('fs');
    function readFold(foldPath){
        fs.readdir(foldPath, function(err, files){
            if(err){
                log(err);
                return false;
            }
            files.forEach(function(fileName){    
                var director = path.join(root + '/', fileName);  
                fs.stat(director, function(err, stats){
                    if(err){
                        log(err);
                        return false;
                    }
                    if(stats.isDirectory()){
                        //do something;
                        readFold(director);
                    }    
                    if(stats.isFile()){
                        fs.readFile(filePath, 'utf-8', function(error, file){
                            if(error){
                                log(error);
                            }else{
                                var obj = JSON.parse(file);                                
                                console.log(obj,"===================")
                            }
                        });
                    }
                });
            });
        });
    }
readFold("aa")