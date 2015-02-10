var gulp = require('gulp');
var github = require('./core/github');
var skvalley = require('./core/skvalley');

gulp.task('default', function() {
  // place code for your default task here

  github
    .load({provider:true})
    .then(function(repos){
      console.log(repos);

    })

   skvalley.load({
    url : 'https://skvalley.com/ce-soap60/services/CollabNet?wsdl',
    endPointUrl : 'https://skvalley.com/ce-soap60/services/CollabNet',
    scmWsdl: 'https://skvalley.com/ce-soap60/services/ScmApp?wsdl',
    scmLocation: 'https://skvalley.com/ce-soap60/services/ScmApp',
    userName : 'jaejin.yun',
    password : '#A7676a#'
    }).then(function(result){
    // console.log(result.projectList);
   }).catch(function(err){
       console.log(err);
   })

  //theme.

});