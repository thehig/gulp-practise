var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require('./gulp/gulp.config.js')();

gulp.task('default', function(){
	return require('gulp-task-listing').withFilters(null, 'default')();
});

gulp.task('all', ['source', 'unit', 'e2e']);

gulp.task('build-clean', function() {
	var tempSourceFiles = [
		config.base.distro
	];

	return require('del')(tempSourceFiles).then(function(paths) {
		if(paths && paths.length)
			gutil.log('\tdeleted ', paths.join(', '));
	});
});

gulp.task('build', ['all', 'build-clean'], function(){
	gulp.src(config.base.temp + '/src/**/*.*')
		.pipe(gulp.dest(config.base.distro));
});

// Load everything in the gulp folder
require('require-dir')('./gulp');