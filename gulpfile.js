var gulp = require('gulp');
var tasks = require('gulp-task-listing');

gulp.task('default', function(){
	return tasks.withFilters(null, 'default')();
});

gulp.task('temp-cleanup', function() {
  var tempSourceFiles = [
    config.base.temp
  ]

  return del(tempSourceFiles).then(function(paths) {
    console.log('Deleted temp files and folders:\n', paths.join('\n'));
  });
});

gulp.task('dist-cleanup', function() {
  var distroSourceFiles = [
    config.base.distro
  ]

  return del(distroSourceFiles).then(function(paths) {
    console.log('Deleted distro files and folders:\n', paths.join('\n'));
  });
});


// Load everything in the gulp folder
require('require-dir')('./gulp');