var gulp = require('gulp');
var gutil = require('gulp-util'); // Logging
var mocha = require('gulp-mocha'); // Testing framework
var jshint = require('gulp-jshint'); // Syntax hilighting
var sourcemaps = require('gulp-sourcemaps'); // Source map generation (coffee)
var coffee = require('gulp-coffee'); // Coffee compiler
var del = require('del'); // File deleter
var webserver = require('gulp-webserver');
var casperjs = require('gulp-casperjs');


// Delete the public folder before we start
gulp.task('clean', function() {
	gutil.log("\tDeleting public folder");
	return del(['public/'])
});

// Run jshint on everything in the app folder
gulp.task('jshint', function() {
	gutil.log("\tJSHinting app/*.js");
	return gulp.src('app/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

// Convert all coffee files in the tests folder
gulp.task('coffee', function() {
	gutil.log("\tTranspiling tests/*.coffee to public/tests/*.js");
	return gulp.src('tests/**/*.coffee')
		.pipe(sourcemaps.init())
		.pipe(coffee().on('error', gutil.log))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./public/tests'));
});

// Copy app scripts into public folder
gulp.task('copy-scripts', function() {
	gutil.log("\tCopying app/*.js|html to public/app/*.js");
	return gulp.src(['app/**/*.js', 'app/**/*.html'])
		.pipe(gulp.dest('public/app'));
});

// Run all tests through mocha
gulp.task('mocha', ['copy-scripts', 'coffee'], function() {
	gutil.log("\tRunning tests in public/tests/*.js");
	return gulp.src('./public/tests/**/*.js')
		.pipe(mocha());
});



var server = undefined;
gulp.task('webserver', ['copy-scripts'], function() {
	server = gulp.src('./public/app/')
		.pipe(webserver({
			port: 3000
			// livereload: true,
			// directoryListing: true,
			// open: true
		}));
	return server;
});

gulp.task('casper-test', ['webserver'], function(){
	return gulp.src('tests/casper*.js')
		.pipe(casperjs());
});

gulp.task('casper', ['casper-test'], function(){
	server.emit('kill');
});


gulp.task('default', ['clean'], function() {
	return gulp.start('jshint', 'mocha');
});