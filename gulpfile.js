var gulp = require('gulp');
var tasks = require('gulp-task-listing');

gulp.task('default', function(){
	return tasks.withFilters(null, 'default')();
});

gulp.task('all', ['source', 'unit', 'e2e']);

// Load everything in the gulp folder
require('require-dir')('./gulp');