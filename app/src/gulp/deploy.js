'use strict';

var gulp = require('gulp');
var config = require('../.yo-rc.json')["generator-codepolio"];
var chalk = require('chalk');

var GitHubApi = require("github");
var github = new GitHubApi({version: "3.0.0"});

var gutil = require('gulp-util');
var magenta = gutil.colors.magenta;
var cyan = gutil.colors.cyan;
var red = gutil.colors.red;
var PLUGIN_NAME = 'deploy';


function log (message) {
  gutil.log(magenta(PLUGIN_NAME), message);
}

function warn (message) {
  log(red('WARNING') + ' ' + message);
}

function error (message) {
  return new PluginError(PLUGIN_NAME, message);
}



function checkAuth(){

  github.user.get(config.deploy.username, function(err, response){
      
    if(err){
      log(chalk.red(err)); 
      process.exit(1); 
    }

  });

}

gulp.task('github:auth', function(){
  
  if( config.deploy.token.length < 40 && config.deploy.password === "GITHUB_PASSWORD" ) {
   
    console.log(chalk.red("open your .yo-rc.json file & put your password or access token for github"));
    process.exit(1); 
   
  }

  if( config.deploy.token.length === 40 ){

    // sync call
    github.authenticate({
      type: "oauth",
      token: config.deploy.token
    });

    checkAuth()

  }

  if( config.deploy.password ) {

    // sync call
    github.authenticate({
      type: "basic",
      username: config.deploy.username,
      password: config.deploy.password
    });

    checkAuth()
  }

});

gulp.task('github:create', function(){
  
  
  github.repos.create({name:config.deploy.repository}, function(err, response, body){

    if( err ) {
      log("already created it");
    }else{
      log("created repository in github");
    }
    
    // console.log(err, response, body)
  })

});

gulp.task('github', ['github:auth' ,'github:create']);
