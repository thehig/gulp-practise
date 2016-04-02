var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require('./gulp.config.js')();

gulp.task('e2e', ['e2e-mocha'], function() {
	server.emit('kill');
});

gulp.task('e2e-clean-temp', function() {
	var tempE2EFiles = [
		config.base.temp + "/e2e"
	];

	return require('del')(tempE2EFiles).then(function(paths) {
		if (paths && paths.length)
			gutil.log('\tdeleted ', paths.join(', '));
	});
});

gulp.task('e2e-coffee', ['e2e-clean-temp'], function() {
	var e2eTestFiles = [
		config.e2e.source + "/**/*.coffee"
	];

	var sourcemaps = require('gulp-sourcemaps');
	return gulp.src(e2eTestFiles)
		.pipe(sourcemaps.init())
		.pipe(require('gulp-coffee')().on('error', gutil.log))
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest(config.base.temp + '/e2e'));
});

var server = undefined;
gulp.task('e2e-serve', ['source', 'e2e-coffee'], function() {
	server = gulp.src(config.e2e.servedir)
		.pipe(require('gulp-webserver')(config.e2e.servecfg));
	return server;
});

gulp.task('e2e-mocha', ['e2e-serve'], function(cb) {
	var flags = [
		config.base.temp + '/e2e/*.js'
	];

	var spawn = require('child_process').spawn;

	var cmd = spawn('mocha-casperjs', flags, {
		stdio: 'inherit'
	});

	return cmd.on('close', cb);
});