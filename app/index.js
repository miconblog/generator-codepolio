'use strict';
var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var CodepolioGenerator = generators.Base.extend({

  constructor: function(){
    generators.Base.apply(this, arguments);
    //this.argument('appname', {type: String, required: true})
    //this.option('coffee');
    //this.config.save();
  },

  info : function(){
    if (!this.options['skip-welcome-message']) {
      this.log(yosay(
        chalk.red('Welcome!') + '\n' +
        chalk.yellow('Now you can generate your portfolio website!')
      ));
    }
  }

});
module.exports = CodepolioGenerator;

require('./src/1initializing')(CodepolioGenerator);
require('./src/2prompts')(CodepolioGenerator);
require('./src/3configuring')(CodepolioGenerator);
require('./src/4default')(CodepolioGenerator);
require('./src/5writing')(CodepolioGenerator);
require('./src/6conflicts')(CodepolioGenerator);
require('./src/7install')(CodepolioGenerator);
require('./src/8end')(CodepolioGenerator);
