'use strict';

var _ = require('lodash');
var chalk = require('chalk');

module.exports = function (Generator) {

  Generator.prototype.initializing = function() {

    console.log('1. initializing');

  }
}