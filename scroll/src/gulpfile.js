const gulp=require("gulp");
const gulpWebserver=require("gulp-webserver");


//创建端口其代理服务

gulp.task("server",()=>{
    return gulp.src("../src")
    .pipe(
        gulpWebserver({
            port:8000,
            //设置代理代到3000这个服务器端口
            proxies:[
                {
                    source: '/api/data', 
                    target: 'http://localhost:3000/api/data',
                },{
                    source: '/details/', 
                    target: 'http://localhost:3000/details/',
                },{
                    source: '/edit', 
                    target: 'http://localhost:3000/edit',
                }
            ]
        })
    )
})