const { src, dest, watch, series } = require('gulp');
 
// Compilar CSS
const sass = require('gulp-sass')(require('sass'));
 
// Imagenes
const imagemin = require('gulp-imagemin');
 
function css(done) {
  src('src/scss/app.scss').pipe(sass()).pipe(dest('build/css'));
 
  done();
}
 
function dev() {
  watch('src/scss/**/*.scss', css);
}
 
function images(done) {
  src('src/img/**/*')
    .pipe(imagemin({ optimizationLevel: 3 }))
    .pipe(dest('build/img'));
 
  done();
}
 
exports.css = css;
exports.dev = dev;
exports.images = images;
exports.default = series(images, css, dev);