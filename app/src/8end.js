/**
 * Called last, cleanup, say good bye, etc
 */
'use strict';

var _ = require('lodash');
var chalk = require('chalk');

module.exports = function (Generator) {
  Generator.prototype.end = function() {

    //console.log('8. end');

  }
}