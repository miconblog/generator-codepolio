'use strict';

var _ = require('lodash');
var chalk = require('chalk');
var prompts = require('../prompts.json');

module.exports = function (Generator) {
  /**
   * 이렇게 코드를 분리한 것은 런루프를 돌리기 위해 
   * 인스턴스 메소드를 분리한 것과 다름 없다.
   * prompts.json 파일을 읽어서,.. 한번에 질문을 만들어내자!
   */
  Generator.prototype.prompting = function() {

    console.log('2. prompting');

    // this.log('__________________________');
    // this.log('Check your ' + chalk.green('configuratoins'));


    var done = this.async();

    this.prompt(prompts, function(answers){

      //console.log(this, answers);
      this.props = answers;

      done();

    }.bind(this));


  }
}