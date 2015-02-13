'use strict';

var _ = require('lodash');
var chalk = require('chalk');

var prompts = require('../prompts.json');
var Q = require('q');


function inquireUsernames( repos){

  var funcs = [];
  var self = this;

  repos.forEach(function(name){

    funcs.push(function(done2){

      var deferred = Q.defer();
      var prompt = _.cloneDeep(prompts[1]);
      prompt.message =  prompt.message.replace("#REPOS#", name);

      var done = self.async();
      self.prompt(prompt, function(answers){

        //TODO: 설정값 저장....

        done();
        done2();
        deferred.resolve(self.async());

      });
      return deferred.promise
    });
  });



  funcs.reduce(Q.when,Q(self.async()));
}



module.exports = function (HubpolioGenerator) {
  var repos = [];

  HubpolioGenerator.prototype.selectRepos = function() {

    this.log('__________________________');
    this.log('Check your ' + chalk.green('configuratoins'));

    var done = this.async();
    this.prompt(prompts[0], function(answers){
      repos = answers.repos;

      done();
      //this.log('\n__________________________');
    }.bind(this));

    
  }



  HubpolioGenerator.prototype.inputUsername = function() {


    inquireUsernames.call(this, repos);


  }



  HubpolioGenerator.prototype.selectTheme = function() {

    var done = this.async();
    this.prompt(prompts[2], function(answers){
      repos = answers.repos;

      done();
      //this.log('\n__________________________');
    }.bind(this));


    // TODO: 여러개중에 하나의 테마를 고른다.




  }

}