/**
 * Where you write the generator specific files (routes, controllers, etc)
 */
'use strict';

var _ = require('lodash');
var chalk = require('chalk');

module.exports = function (Generator) {
  Generator.prototype.writing = {
    
    plugins: function(){
      if(this.props.github){
        this.fs.copy(
          this.templatePath('../src/plugin/github.js'),
          this.destinationPath('gulp/github.js')
        );
      }

      if(this.props.bitbucket){
        this.fs.copy(
          this.templatePath('../src/plugin/bitbucket.js'),
          this.destinationPath('gulp/bitbucket.js')
        );
      }

    }

  }
}