var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del'); // File deleter

var sourcemaps = require('gulp-sourcemaps'); // Source map generation (coffee)
var coffee = require('gulp-coffee'); // Coffee compiler
var mocha = require('gulp-mocha'); // Testing framework

var config = require('./gulp.config.js')();


gulp.task('unit', ['unit-mocha']);


gulp.task('unit-clean-temp', function() {
  var tempUnitFiles = [
    config.base.temp + "/unit"
  ]

  return del(tempUnitFiles).then(function(paths) {
    gutil.log('\tdeleted ', paths.join(', '));
  });
});

gulp.task('unit-coffee', ['unit-clean-temp'], function() {
	var unitTestFiles = [
		config.unit.source + "/**/*.coffee"
	];

	return gulp.src(unitTestFiles)
		.pipe(sourcemaps.init())
		.pipe(coffee().on('error', gutil.log))
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest(config.base.temp + '/unit'));
});

gulp.task('unit-mocha', ['unit-coffee', 'source'], function() {
	var unitTestFiles = [
		config.base.temp + "/unit/*.js"
	];

	return gulp.src(unitTestFiles)
		.pipe(mocha());
});