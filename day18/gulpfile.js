const gulp=require("gulp");

const gulpWebserver=require("gulp-webserver")
//创建服务任务 

gulp.task("server",()=>{
    return gulp.src("./src")
    .pipe(
        gulpWebserver({
            port:8000,
            proxies:[
                {
                    source: '/api/list', 
                    target: 'http://localhost:3000/api/list'
                },
                {
                    source: '/api/add/', 
                    target: 'http://localhost:3000/api/add/'
                },
                {
                    source: '/api/edit', 
                    target: 'http://localhost:3000/api/edit'
                },{
                    source: '/api/del', 
                    target: 'http://localhost:3000/api/del'
                },{
                    source: '/add', 
                    target: 'http://localhost:3000/add'
                },{
                    source: '/api/add', 
                    target: 'http://localhost:3000/api/add'
                }
            ]
        })
    )
});
