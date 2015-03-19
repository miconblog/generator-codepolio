'use strict';

var gulp = require('gulp');
var fs = require('fs');
var chalk = require('chalk');
var Q = require('q');

gulp.task('sweetcode.jam', function(){

  if( !fs.existsSync("src/app/sweetcode.jam") ){
    console.error(chalk.red('please, run "gulp codejam" first!'));
    process.exit(1);
  }

});

gulp.task('codejam', function(){
  var deferred = Q.defer();
  var codejam = require('../.yo-rc');
  var github = require('./github.js');

  codejam.repos = [];

  github.load({username: codejam['generator-codepolio'].github})
  .then(function(repos){
    
    repos.forEach(function(repo){

      if( repo.provider ){
        
        // custom for theme 
        var item = repo[repo.provider];
        repo.url = item.svn_url;
        repo.language = repo.language ? repo.language : item.language;
        repo.fork_count = item.forks_count;
        repo.star_count = item.stargazers_count;
        repo.watcher_count = item.watchers_count;
        repo.private = item.private;
        repo.owner = item.owner;

        //delete repo[repo.provider];
      }
      codejam.repos.push(repo);    
    });

    fs.writeFile("src/app/sweetcode.jam",
      JSON.stringify(codejam, null, '\t'), function(){
        deferred.resolve();
      }
    );

  })
  .fail(function (error) {
      // Handle any error from all above steps
    console.log(chalk.red(error));
    deferred.resolve();
  });

  return deferred.promise;
});