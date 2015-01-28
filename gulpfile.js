var gulp = require('gulp');
var github = require('./core/github');

gulp.task('default', function() {
  // place code for your default task here

  github
    .load({provider:true})
    .then(function(repos){
      console.log(repos);

    })
  //theme.

});