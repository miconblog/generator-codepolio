/**
 * Saving configurations and configure the project 
 * (creating .editorconfig files and other metadata files)
 */
'use strict';

var _ = require('lodash');
var chalk = require('chalk');

module.exports = function (Generator) {
  Generator.prototype.configuring = function() {

    // creating common meta file
    this.fs.copy(
      this.templatePath('../src/common/editorconfig'),
      this.destinationPath('.editorconfig')
    );
    this.fs.copy(
      this.templatePath('../src/common/jshintrc'),
      this.destinationPath('.jshintrc')
    );

    // theme copy
    this.fs.copy(
      this.templatePath(this.props.theme),
      this.destinationPath()
    );

    // saving configuartions
    this.config.set(this.props);
    this.config.save();
  }
}