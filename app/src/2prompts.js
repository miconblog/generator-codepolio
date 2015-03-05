/**
 * Where you prompt users for options (where you'd call this.prompt())
 */
'use strict';

var _ = require('lodash');
var chalk = require('chalk');
var prompts = require('../prompts.json');

module.exports = function (Generator) {
  /**
   * 이렇게 코드를 분리한 것은 런루프를 돌리기 위해 인스턴스 메소드를 분리한 것과 다름 없다.
   * prompts.json 파일을 읽어서,.. 한번에 질문을 만들어내자!
   */
  Generator.prototype.prompting = {

    first: function() {
      var done = this.async();
      this.prompt(prompts, function(answers){

        this.props = answers;

        done();

      }.bind(this));
    },
    requestUsername: function(){

      if(  this.props.repositories != undefined &&  this.props.repositories.length > 0 ) {

        var requestUsername = [];
        _.forEach(this.props.repositories,function(v) {
          requestUsername.push({
            "type" : "input",

            "name" : v,
            "message" : "insert "+v+" username"
          });
        });

        var done = this.async();
        this.prompt(requestUsername, function(answers){
          _.merge(this.props,answers);

          done();

        }.bind(this));

      }

    }  ,
    requestPassword: function(){

      if(  this.props.repositories != undefined &&  this.props.repositories.length > 0 && this.props.repositories.indexOf('Teamforge') > -1) {
        var done = this.async();
        this.prompt([
          {
            "type" : "password",

            "name" : "teamforge_password",
            "message" : "insert your password"
          }], function(answers){

          _.merge(this.props,answers);

          done();

        }.bind(this));

      }

    }  ,


  }
}
