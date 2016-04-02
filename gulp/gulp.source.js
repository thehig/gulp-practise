var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require('./gulp.config.js')();

gulp.task('source-dep', function(){
	return true;
});

gulp.task('source', ['source-dep'], function(){
	return true;
});
