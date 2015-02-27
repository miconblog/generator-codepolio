/**
 * Where you write the generator specific files (routes, controllers, etc)
 */
'use strict';

var _ = require('lodash');
var chalk = require('chalk');

module.exports = function (Generator) {
  Generator.prototype.writing = {
    
    app: function(){ 
      this.fs.copy(
        this.templatePath(this.props.theme + '/package.json'),
        this.destinationPath('package.json')
      );

      this.fs.copy(
        this.templatePath(this.props.theme + '/bower.json'),
        this.destinationPath('bower.json')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath(this.props.theme + '/editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath(this.props.theme + '/jshintrc'),
        this.destinationPath('.jshintrc')
      );
    },

    src: function(){
      this.fs.copy(
        this.templatePath(this.props.theme + '/src/'),
        this.destinationPath('src/')
      ); 
    },

    gulp: function(){
      this.fs.copy(
        this.templatePath(this.props.theme + '/gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );

      this.fs.copy(
        this.templatePath(this.props.theme + '/gulp/'),
        this.destinationPath('gulp/')
      ); 
    }

  }
}