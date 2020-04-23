const gulp = require("gulp");

const gulpscss = require("gulp-sass")
const gulphtml = require("gulp-htmlmin");
const gulpcss = require("gulp-minify-css");
const gulpWebserver = require("gulp-webserver");
const gulpbabel = require("gulp-babel");
const gulpuglify = require("gulp-uglify")
//建立任务

gulp.task("getCSS", () => {
    //scss转css任务
    return gulp.src("./src/app/scss/*.scss")
        .pipe(
            gulpscss()
        )
        .pipe(
            //将转译后的css添加给这个路径
            gulp.dest("./src/app/css")
        )
})

gulp.task("s", () => {
    gulp.src("")
})

//服务
gulp.task("server", () => {
    return gulp.src("./src")
        .pipe(
            gulpWebserver({
                host: "localhost",
                port: 8000
            })
        )

})

//压缩css任务到dist下面的css

gulp.task("mincss", () => {
    return gulp.src("./src/app/css/*.css")
        .pipe(
            gulpcss()
        )
        .pipe(
            gulp.dest("./dist/css")
        )
})

//es6js转成es5js压缩版

gulp.task("minJS", () => {
    return gulp.src("./src/app/js/*.js")
        .pipe(
            gulpbabel()
        )
        .pipe(
            gulpuglify()
        )
        .pipe(
            gulp.dest("./dist/js")
        )
})

//压缩HTML到dist中

gulp.task("minHTML", () => {
    gulp.src("./src/index.html")
        .pipe(
            gulphtml({
                collapseWhitespace: true,
                minifyJS: true,//压缩页面js
                minifyCSS: true//压缩页面css
            })
        )
        .pipe(
            gulp.dest("./dist")
        )
})

//监听文件 改scss的时候 让css的自动改

gulp.task("watch",()=>{
    gulp.watch("./src/app/scss/index.scss","getCSS")
})


//并行运行任务
//创建开发依赖并行任务
gulp.task("dev", gulp.parallel("getCSS", "server"));

//异步执行
gulp.task("bulish", gulp.parallel(gulp.series("getCSS", "mincss"), "minJS", "minHTML","watch"))