/**
 * Saving configurations and configure the project 
 * (creating .editorconfig files and other metadata files)
 */
'use strict';

var _ = require('lodash');
var chalk = require('chalk');

module.exports = function (Generator) {
  Generator.prototype.configuring = function() {

    // creating common meta file
    this.fs.copy(
      this.templatePath('../src/common/editorconfig'),
      this.destinationPath('.editorconfig')
    );
    this.fs.copy(
      this.templatePath('../src/common/jshintrc'),
      this.destinationPath('.jshintrc')
    );
    this.fs.copy(
      this.templatePath('../src/common/gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copyTpl(
      this.templatePath('../src/common/_README.md'),
      this.destinationPath('README.md'),
      { username: this.props.github }
    );
    this.fs.copyTpl(
      this.templatePath('../src/common/_deploy.sh'),
      this.destinationPath('deploy.sh'),
      { 
        cwd: this.destinationPath(),
        username: this.props.github,
        repository: this.config.get("deploy").repository
      }
    );

    // theme copy
    this.fs.copy(
      this.templatePath(this.props.theme),
      this.destinationPath()
    );

    // gulp tasks
    this.fs.copy(
      this.templatePath('../src/gulp/codejam.js'),
      this.destinationPath('/gulp/codejam.js')
    );
    this.fs.copy(
      this.templatePath('../src/gulp/deploy.js'),
      this.destinationPath('/gulp/deploy.js')
    );

    // saving configuartions
    if( this.props.github ){
      var deploy = this.config.get("deploy");
      deploy.username = this.props.github;
      this.config.set("deploy", deploy);
      this.config.set("github", this.props.github);
    }

    if( this.props.bitbucket ){
      this.config.set("bitbucket", this.props.bitbucket);
    }

    //this.config.set(this.props);
    this.config.save();
  }
}