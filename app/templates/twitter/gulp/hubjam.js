'use strict';

var gulp = require('gulp');
var fs = require('fs');
var hubs = require('../hubfile.json');
var jam = [];

gulp.task('hubjam', function(){

  hubs.forEach(function(hub){
    if( hub.provider ){
      var item = hub[hub.provider];
      hub.url = item.svn_url;
      hub.language = item.language;
      hub.fork_count = item.forks_count;
      hub.star_count = item.stargazers_count;
      hub.watcher_count = item.watchers_count;
      hub.private = item.private;
      hub.owner = item.owner;

      delete hub[hub.provider];
    }
    jam.push(hub);    
  });

  fs.writeFile("src/app/hubfile.json",
    JSON.stringify(jam, null, '\t'), function(){}
  );

});