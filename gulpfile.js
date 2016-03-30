var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');
var coffee = require('gulp-coffee');

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('coffee', function(){
	return gulp.src('tests/**/*.coffee')
		.pipe(coffee().on('error', gutil.log))
		.pipe(gulp.dest('./public/'));
});

gulp.task('default', function(){
	return gutil.log("Gulp is running");
});