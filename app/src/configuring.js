'use strict';

var _ = require('lodash');
var chalk = require('chalk');

module.exports = function (Generator) {
  Generator.prototype.configuring = function() {

    console.log('3. configuring');

    console.log(this.props);
  }
}