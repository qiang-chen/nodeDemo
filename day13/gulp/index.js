
const gulp=require("gulp");
const sass=require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');

const gulpuglify=require("gulp-uglify");
const gulpbabel=require("gulp-babel");
// gulp.task("a",()=>{
//     console.log("aaaa")
// })

gulp.task("getCss",()=>{
    //编译scss使用
    return gulp.src("./scss/*.scss")
    .pipe(
        sass()
    )
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
       
    }))
    .pipe(
        gulp.dest("./css")
    )
})

gulp.task("minjs",()=>{
    return gulp.src("./js/*.js")
    .pipe(
        gulpbabel()
    )
    .pipe(
        gulpuglify()
    )
    .pipe(
        gulp.dest("./dist")
    )
})



