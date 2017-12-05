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
            baseDir: "./"
        }
    });
});
gulp.task("js", function() {
    gulp.src(["script/**/*.js","!script/min/**/*.js"])
        .pipe(uglify())
        .pipe(gulp.dest("./script/min"))
        .pipe(browser.reload({stream:true}))
});
 
gulp.task("sass", function() {
    gulp.src("sass/**/*scss")
        .pipe(frontnote())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("./css"))
        .pipe(browser.reload({stream:true}))
});
gulp.task("html", function(){
	gulp.src("**/*.html")
		.pipe(browser.reload({stream:true}))
});

gulp.task("default",['server'], function() {
    gulp.watch(["script/**/*.js","!script/min/**/*.js"],["js"]);
    gulp.watch("sass/**/*.scss",["sass"]);
    gulp.watch("**/*.html", ["html"]);
});