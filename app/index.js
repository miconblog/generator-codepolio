'use strict';

var generators = require('yeoman-generator');

var HubpolioGenerator = generators.Base.extend({

  constructor: function(){

    generators.Base.apply(this, arguments);

    //this.argument('appname', {type: String, required: true})

    //this.option('coffee');

    //this.config.save();

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

    // prompt users for otptions 
    
    var done = this.async();
    this.prompt([
      {
        type: "input",
        name: "username",
        message: "What\'s your Github username",
        store: true
      },
      {
        type: "confirm",
        name: "test",
        message: "test for test?"
      }
    ], function(answers){
      
      this.log(answers);

      if(answers.test){
        this.log("TESTSRETE");
        //this.config.save();
      }

      done();
    }.bind(this));
  },
  configuring: function(){
    // save config, creating .editorconfig file
  },
  default: function(){},
  writing: function(){
    //generator specific files (routes, controllers, etc)
  },
  conflicts: function(){
    // conflicts are handled
  },
  install: {
    // install and run (npm, bower)
    method1: function(){

      console.log('method 1 just ran');
      this.helperMethod();

    },

    method2: function(){

      console.log('method 2 just ran');

    }
  },
  end: function() {
    // cleanup, say good bye,.. etc
  }

});

module.exports = HubpolioGenerator;
//  .extend({
//   exec: function(){
//     this.helper();
//   }
// });
