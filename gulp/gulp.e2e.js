var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del'); // File deleter
var sourcemaps = require('gulp-sourcemaps'); // Source map generation (coffee)
var coffee = require('gulp-coffee'); // Coffee compiler

var config = require('./gulp.config.js')();

var webserver = require('gulp-webserver');
var spawn = require('child_process').spawn;
var server = undefined;

gulp.task('e2e', ['e2e-serve', 'e2e-coffee'], function() {
	server.emit('kill');
});

gulp.task('e2e-clean-temp', function() {
	var tempSourceFiles = [
		config.base.temp + "/e2e"
	];

	return del(tempSourceFiles).then(function(paths) {
		gutil.log('\tdeleted ', paths.join(', '));
	});
});

gulp.task('e2e-coffee', ['e2e-clean-temp'], function() {
	var e2eTestFiles = [
		config.e2e.source + "/**/*.coffee"
	];

	return gulp.src(e2eTestFiles)
		.pipe(sourcemaps.init())
		.pipe(coffee().on('error', gutil.log))
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest(config.base.temp + '/e2e'));
});

gulp.task('e2e-serve', ['source'], function() {
	server = gulp.src(config.e2e.servedir)
		.pipe(webserver(config.e2e.servecfg));
	return server;
});


gulp.task('e2e-mocha', ['e2e-serve'], function(cb){
  var flags = [
  	config.base.temp + '/e2e/mocha-casper.js'
  ];
  var cmd = spawn('mocha-casperjs', flags, {stdio: 'inherit'});
  return cmd.on('close', cb);
});
// gulp.task('e2e-serve-kill', function() {
// 	server.emit('kill');
// });