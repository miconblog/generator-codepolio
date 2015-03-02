/**
 * Where installation are run (npm, bower)
 */
'use strict';

var _ = require('lodash');
var chalk = require('chalk');

module.exports = function (Generator) {
  Generator.prototype.install = function() {

    this.installDependencies({
      skipInstall: this.options['skip-install']
    });

  }
}