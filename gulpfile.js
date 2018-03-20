var gulp = require("gulp");

// sass
var sass = require("gulp-sass");
//  prefix fixer
var autoprefixer = require("gulp-autoprefixer");
 
var frontnote = require("gulp-frontnote");

var uglify = require("gulp-uglify");

var browser = require("browser-sync");
 
gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./public"
        }
    });
});
gulp.task("js", function() {
    gulp.src("./src/js/**/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("public/js"))
        .pipe(browser.reload({stream:true}))
});
 
gulp.task("sass", function() {
    gulp.src("./src/styles/**/*.scss")
        .pipe(frontnote())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("public/css"))
        .pipe(browser.reload({stream:true}))
});
gulp.task("html", function(){
	gulp.src("./src/**/*.html")
        .pipe(gulp.dest("public/"))
		.pipe(browser.reload({stream:true}))
});

gulp.task("default",['js','sass','html','server'], function() {
    gulp.watch("src/js/**/*.js",["js"]);
    gulp.watch("src/styles/**/*.scss",["sass"]);
    gulp.watch("src/*.html", ["html"]);
});
