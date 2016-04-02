var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del'); // File deleter

var config = require('./gulp.config.js')();

var webserver = require('gulp-webserver');
var server = undefined;

gulp.task('e2e', ['source', 'e2e-serve'], function() {
	server.emit('kill');
});


gulp.task('e2e-clean-temp', function() {
	var tempSourceFiles = [
		config.base.temp + "/e2e"
	]

	return del(tempSourceFiles).then(function(paths) {
		gutil.log('\tdeleted ', paths.join(', '));
	});
});

gulp.task('e2e-serve', function() {
	server = gulp.src(config.e2e.servedir)
		.pipe(webserver(config.e2e.servecfg));
	return server;
});

// gulp.task('e2e-serve-kill', function() {
// 	server.emit('kill');
// });