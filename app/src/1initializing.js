/**
 * initialization methods 
 * checking current project state, getting configs, etc
 */
'use strict';

var _ = require('lodash');
var chalk = require('chalk');

module.exports = function (Generator) {

  Generator.prototype.initializing = function() {
    // 현재 프로젝트 폴더 이름이나 .yo-rc.json 파일 정보를 확인

    //console.log(this.config);
    this.config.set({
      deploy: {
        username: "GITHUB_USERNAME",
        password: "GITHUB_PASSWORD",
        repository: "codepolio",
        token: "GITHUB_TOKEN"
      }
    })
  }
}