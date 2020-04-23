const gulp=require("gulp");
const gulpSass=require("gulp-sass");
const gulpWebserver=require("gulp-webserver");
const gulpmincss=require("gulp-cssmin")
gulp.task("getCss",()=>{
    return gulp.src("./src/sass/*.{scss,sass}")
    .pipe(
        gulpSass()
    )
    
    .pipe(
        gulp.dest("./src/css/")
    )
});

//监听
gulp.task("watch",()=>{
    return gulp.watch("./src/sass/*.scss",gulp.parallel("getCss"))
});

gulp.task("server",()=>{
    return gulp.src("./src").pipe(
        gulpWebserver({
            host:"localhost",
            port:8000,
            //代理
            //open:true,
            proxies:[
                {
                    source:"/api/list",
                    target:"http://localhost:3000/api/list"
                },
                {
                    source:"/api/big",
                    target:"http://localhost:3000/api/big"
                },
                {
                    source:"/api/data",
                    target:"http://localhost:3000/api/data"
                }
            ]
        })
    )
})