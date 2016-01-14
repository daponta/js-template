var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');


var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task("default", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});


gulp.task('brs', function() {
  browserify("./src/vegemon.js", {debug: true})
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message);})
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist/'))
});