'use strict';

var _ = require('lodash');
var chalk = require('chalk');

var prompts = require('../prompts.json');


module.exports = function (HubpolioGenerator) {
  var account = [];

  HubpolioGenerator.prototype.selectRepos = function() {

    this.log('__________________________');
    this.log('Check your ' + chalk.green('configuratoins'));

    var done = this.async();
    this.prompt(prompts[0], function(answers){
      
      if(answers.repos){
        account = answers.repos;
      }

      done();
      //this.log('\n__________________________');
    }.bind(this));

    
  }


  HubpolioGenerator.prototype.inputAccount = function() {

    var done = this.async();
    this.prompt(prompts[1], function(answers){
      
      if(answers.test){
        this.log("TESTSRETE");
        //this.config.save();
      }

      done();
      this.log('\n__________________________');
    }.bind(this));

    
  }

}