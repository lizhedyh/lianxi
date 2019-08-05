var gulp = require('gulp');
gulp.task('my_task', function() {
  setInterval(function(){
    console.log('I am out!')
  },5000);
});