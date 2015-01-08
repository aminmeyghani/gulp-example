var gulp = require("gulp");
var less = require("gulp-less");
var sass = require("gulp-sass");

gulp.task("less", function() {
	gulp.src("less/main.less")
			.pipe(less())
			.pipe(gulp.dest("css/less/main.css"));
});	

gulp.task("sass", function() {
	gulp.src("sass/main.scss")
			.pipe(sass())
			.pipe(gulp.dest("css/sass/main.css"));
});	

gulp.task("dev", ["sass", "less"], function() { console.log("done!") });
