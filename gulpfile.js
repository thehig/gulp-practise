var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');
var coffee = require('gulp-coffee');
var del = require('del');

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
	gutil.log("\tCopying app/*.js to public/app/*.js");
	return gulp.src('app/**/*.js')
		.pipe(gulp.dest('public/app'));

});

// Run all tests through mocha
gulp.task('mocha', ['copy-scripts', 'coffee'], function() {

	gutil.log("\tRunning tests in public/tests/*.js");
	return gulp.src('./public/tests/**/*.js')
		.pipe(mocha());
})

gulp.task('default', ['clean'], function() {
	return gulp.start('jshint', 'mocha');
});