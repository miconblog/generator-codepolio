/**
 * default run loop
 */
'use strict';

var _ = require('lodash');
var chalk = require('chalk');
var github = require('./plugin/github.js');
var fs = require('fs');

module.exports = function (Generator) {
  Generator.prototype.default = function() {
    var self = this;

    github.load()
    .then(function(repos){
      fs.writeFile(
        self.templatePath(self.props.theme + '/hubfile.json'), 
        JSON.stringify(repos, null, '\t'), function(){
      });
    })
    .fail(function (error) {
        // Handle any error from all above steps
      console.log(chalk.red(error));
    });


  }
}