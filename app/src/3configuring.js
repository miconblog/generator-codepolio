/**
 * Saving configurations and configure the project 
 * (creating .editorconfig files and other metadata files)
 */
'use strict';

var _ = require('lodash');
var chalk = require('chalk');

module.exports = function (Generator) {
  Generator.prototype.configuring = function() {

    console.log("Your selections (this.props): ", this.props);
  }
}