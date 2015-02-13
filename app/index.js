'use strict';

var chalk = require('chalk');
var yosay = require('yosay');
var generators = require('yeoman-generator');

var HubpolioGenerator = generators.Base.extend({

  constructor: function(){
    generators.Base.apply(this, arguments);
    //this.argument('appname', {type: String, required: true})
    //this.option('coffee');
    //this.config.save();

    this.props = {};
  },

  info : function(){

    if (!this.options['skip-welcome-message']) {
      this.log(yosay(
        chalk.red('Welcome!') + '\n' + 
        chalk.yellow('Now you can generate your portfolio website!')
      ));
    }

  },

  init: function(){

    this.helperMethod = function(){
      this.log('won\'t be called automatically');
    }

  },

  _helper: function(){
    this.log('this is not automatically');
  },

  initializing: {},
  prompting: function(){
  },
  // configuring: function(){
  //   // save config, creating .editorconfig file
  // },
  // default: function(){},
  // writing: function(){
  //   //generator specific files (routes, controllers, etc)
  // },
  // conflicts: function(){
  //   // conflicts are handled
  // },
  // install: {
  //   // install and run (npm, bower)
  //   method1: function(){

  //     console.log('method 1 just ran');
  //     this.helperMethod();

  //   },

  //   method2: function(){

  //     console.log('method 2 just ran');

  //   }
  // },
  end: function() {
    // cleanup, say good bye,.. etc
  }

});

require('./src/prompts')(HubpolioGenerator);

module.exports = HubpolioGenerator;
