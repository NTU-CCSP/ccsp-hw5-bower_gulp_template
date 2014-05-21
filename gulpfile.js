var gulp    = require('gulp');
var jshint  = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var csso = require('gulp-csso');
var livereload = require('gulp-livereload');

gulp.task('lint', function () {
  return gulp.src(['./public/javascripts/*.js', './gulpfile.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function () {
  return gulp.src([
    './public/javascripts/jquery.easypiechart.js',
    './public/javascripts/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(concat('application.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./tmp/javascripts'))
  .pipe(livereload());
});

gulp.task('styles', function () {
  return gulp.src([
    './public/stylesheets/normalize.css',
    './public/stylesheets/*.css'
  ])
  .pipe(csso())
  .pipe(concat('application.css'))
  .pipe(gulp.dest('./tmp/stylesheets'))
  .pipe(livereload());
});

gulp.task('build', ['scripts', 'styles'], function () {
  gulp.watch('./public/javascripts/*.js', ['scripts']);
  gulp.watch('./public/stylesheets/*.css', ['styles']);
});
