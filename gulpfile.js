// var gulp = require('gulp');
// var watch = require('gulp-watch');

// const { watch, series } = require('gulp');

// gulp.task('default', function(){
//   console.log("Youpi - you created a Gulp task");

// });

// gulp.task('html', function() {
//   console.log('Imagine something very useful being do,e to your HTML here.')
// });

// gulp.task('watch', function() {

//   watch('./app/index.html', function() {
//     gulp.series('html');
//   });

// });

// Try it after

/*

function html() {
  return console.log('Keep going, keep pushing');
}



gulp.watch('./app/index.html', gulp.series('html'));

*/

// Watch files
//Do everything once!
// gulp.task('default', function(){
//   gulp.watch('src/styles/*.css', gulp.series('css')),
//   gulp.watch('src/html/*.html', gulp.series('copyHTML')),
//   gulp.watch('src/js/*.js', gulp.series('scripts')),
//   gulp.watch('src/images/*', gulp.series('imageMIN'));
// return
// });

// const gulp = require("gulp");
const { watch, src, dest, series } = require('gulp');
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssvars = require('postcss-simple-vars');
const cssImport = require('postcss-import');
// const nested = require('postcss-nested')


var fs = require("fs")
var postcsss = require("postcss")
var atImport = require("postcss-import")
 
// css to be processed
var css = fs.readFileSync("./app/assets/styles/styles.css", "utf8")
 
// process css
// postcsss()
//   .use(atImport())
//   .process(css, {
//     // `from` option is needed here
//     from: "./app/assets/styles/styles.css"
//   })
//   .then(function (result) {
//     var output = result.css
 
//     console.log(output)
//   })





function html(cb) {
   console.log('Keep going, keep pushing');
  // body omitted
  cb();
}

// function javascript(cb) {
//   // body omitted
//   cb();
// }

function styles (cb) {
 
  // body omitted
  cb();
}

// CSS task
// function styles() {
//   return gulp
//     .src("./app/assets/styles/styles.css")
//     // .pipe(plumber())
//     // .pipe(sass({ outputStyle: "expanded" }))
//     .pipe(gulp.dest("./app/temp/styles"));
//     // .pipe(rename({ suffix: ".min" }))
//     // .pipe(postcss([autoprefixer(), cssnano()]))
//     // .pipe(gulp.dest("./_site/assets/css/"))
//     // .pipe(browsersync.stream());
// }


function css() {
  return src('./app/assets/styles/styles.css')
    .pipe(postcss([atImport, cssvars(), require('postcss-nested'), autoprefixer()]))
    .pipe(dest('./app/temp/styles'));
}

exports.css = css;



exports.watch = function() {
  // You can use a single task
  watch('./app/index.html', html);
  watch('./app/assets/styles/**/*.css', css);
  // Or a composed task
  // watch('src/*.js', series(clean, javascript));
}; 