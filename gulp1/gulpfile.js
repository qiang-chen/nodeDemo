const gulp=require("gulp");
const gulpSass=require("gulp-sass");
const gulpAutoprefixer=require("gulp-autoprefixer");
const gulpCssmin=require("gulp-cssmin");
const gulpBabel=require("gulp-babel");
const gulpUglify=require("gulp-uglify");
const gulpHtmlmin=require("gulp-htmlmin");
const gulpWebserver=require("gulp-webserver")
//sass转化成css
gulp.task("getCss",()=>{
    return gulp.src("./src/scss/*.{scss,sass}")
    .pipe(
        //将scss编译成css的函数
        gulpSass()
    )
    .pipe(
        //添加内核
        gulpAutoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		})
    )
    .pipe(
        gulp.dest("./src/css/")
    )
})

//将css压缩到dist文件夹下的dist css
//需要这个gulp-cssmin 插件

gulp.task("minCss",()=>{
    return gulp.src("./src/css/*.css")
    .pipe(
        gulpCssmin()
    )
    .pipe(
        gulp.dest("./dist/css/")
    )
})

//将js转成es5语法然后接着压缩

gulp.task("minJS",()=>{
    return gulp.src("./src/js/*.js")
    .pipe(
        gulpBabel()
    )
    .pipe(
        gulpUglify()
    )
    .pipe(
        gulp.dest("./dist/js/")
    )
})
//注意gulp-babel这款插件是对es6转成es5语法 因为es6不能直接压缩 然后需要配置一个.babelrc文件 里面是{"presets": ["@babel/preset-env"]}

//压缩HTML文件到dist下面
//需要模块  gulp-htmlmin

const static = require('./middlware/static')
const router = require('./middlware/router')

gulp.task("htmlmin",()=>{
    return gulp.src("./src/index.html")
    .pipe(
        gulpHtmlmin({
            collapseWhitespace: true,
            minifyJS:true,//压缩页面js
            minifyCSS:true//压缩页面css
        })
    )
    .pipe(
        gulp.dest("./dist/")
    )
})

//起一个服务
//需要这个gulp-webserver插件

gulp.task("server",()=>{
    return gulp.src("./src")
    .pipe(
        gulpWebserver({
            host:"localhost",
            port:8000,
            // middleware:[static,router],
            //设置一个代理
            proxies:[
                {
                    source:"/api/aa",
                    target:"http://localhost:3000/api/aa"
                }
            ]
            
        })
    )
})





//写一个汇总任务
//同时运行
gulp.task("dev",gulp.parallel(gulp.series("getCss","minCss"),"minJS","htmlmin","server"))

