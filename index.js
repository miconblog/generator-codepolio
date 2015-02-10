#!/usr/bin/env node
var Liftoff = require('liftoff');

var Hacker = new Liftoff({
  name: 'hacker'
}).on('require', function (name, module) {
  console.log('Loading external module:', name);
}).on('requireFail', function (name, err) {
  console.log('Unable to load:', name, err);
});

Hacker.launch(function() {
  if(this.configPath) {
    process.chdir(this.configBase);
    console.log('Setting current working directory:', this.configBase);
    // kick off here
  } else {
    console.log('No Hackerfile found.');
    process.exit(1);
  }
});