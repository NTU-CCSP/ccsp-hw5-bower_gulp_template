var gulp    = require('gulp');
var jshint  = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('lint', function () {
  return gulp.src(['./public/javascripts/*.js', './gulpfile.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function () {
  return gulp.src('./public/javascripts/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(concat('application.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./tmp/javascripts'));
});
