var gulp = require('gulp');
var tasks = require('gulp-task-listing');

gulp.task('default', function(){
	return tasks.withFilters(null, 'default')();
});

// Load everything in the gulp folder
require('require-dir')('./gulp');