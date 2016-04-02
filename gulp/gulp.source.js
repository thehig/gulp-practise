var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint'); // Syntax hilighting


var config = require('./gulp.config.js')();


// Source will go from
//   src - Original format with whatever accelerators
//   tmp - Source converted into regular js/css/html
//   dst - Output minified production code

// Clean tmp/src
// Lint the JS files
// 		jshint /src/**/*.js

// Copy basic source files
// 		copy /src/**/*.js -> /tmp/src/*.js
// 		copy /src/**/*.css -> /tmp/src/*.css
// 		copy /src/**/*.html -> /tmp/src/*.html

// Transpile required source files
// 		coffee /src/**/*.coffee -> /tmp/src/*.js
// 		sass /src/**/*.sass -> /tmp/src/*.css
// 		jade /src/**/*.jade -> /tmp/src/*.html

// Prepare JS files for production
// 		concat /tmp/src/**/*.js
// 		copy /dst/app.version.js
// 		minify
// 		copy /dst/app.version.min.js


gulp.task('jshint', function() {
	var basicJsFiles = [
		config.base.source
	];
	return gulp.src(config.base.source + '/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});