'use strict';

var _ = require('lodash');
var chalk = require('chalk');

module.exports = function (Generator) {
  Generator.prototype.writing = function() {

    console.log('5. writing');

  }
}