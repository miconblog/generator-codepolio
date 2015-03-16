'use strict';

var gulp = require('gulp');

var fs = require('fs');

var hubs = require('../hubfile.json');

var jam = [];


gulp.task('hubjam', function(){

  hubs.forEach(function(hub){
    if( hub.provider ){
      hub.language = hub[hub.provider].language
      delete hub[hub.provider];
    }
    jam.push(hub);    
  });


  fs.writeFile("src/app/hubfile.json",
    JSON.stringify(jam, null, '\t'), function(){}
  );

});