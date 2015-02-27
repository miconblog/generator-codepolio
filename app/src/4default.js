/**
 * default run loop
 */
'use strict';

var _ = require('lodash');
var chalk = require('chalk');
var github = require('./plugin/github.js');

module.exports = function (Generator) {
  Generator.prototype.default = function() {

    //console.log('4. default');
    // TODO: Collect repository meta infomation...
    // --> JSON 데이터를 어떻게 쓰냐?
    github.load()
    .then(function(repos){
      console.log('then....', repos)
    })
    .fail(function (error) {
        // Handle any error from all above steps
      console.log('fail', error);
    });


  }
}