var gulp = require("gulp");

// sass
var sass = require("gulp-sass");
//  prefix fixer
var autoprefixer = require("gulp-autoprefixer");
 
var frontnote = require("gulp-frontnote");

var browser = require("browser-sync");

var plumber = require("gulp-plumber");
 
gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./"
        }
    });
});
gulp.task("js", function() {
    gulp.src(["script/**/*.js","!script/min/**/*.js"])
        .pipe(plumber())
        .pipe(frontnote({
        	css: '../css/style.css'
        }))
        .pipe(sass())
        .pipe(uglify())
        .pipe(gulp.dest("./script/min"))
        .pipe(browser.reload({stream:true}))
});
 
gulp.task("sass", function() {
    gulp.src("sass/**/*scss")
        .pipe(plumber())
        .pipe(frontnote())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("./css"))
        .pipe(browser.reload({stream:true}))
});

gulp.task("default",['server'], function() {
    gulp.watch(["script/**/*.js","!script/min/**/*.js"],["js"]);
    gulp.watch("sass/**/*.scss",["sass"]);
});