'use strict';

var _ = require('lodash');
var chalk = require('chalk');

module.exports = function (HubpolioGenerator) {
  HubpolioGenerator.prototype.end = function() {

    console.log('8. end');

  }
}