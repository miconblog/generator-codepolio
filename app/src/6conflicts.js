/**
 * Where conflicts are handled (used internally)
 */
'use strict';

var _ = require('lodash');
var chalk = require('chalk');

module.exports = function (Generator) {
  Generator.prototype.conflicts = function() {

  	// forced overwrite all files
  	this.conflicter.force = true;

  }
}