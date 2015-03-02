'use strict';
var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var HubpolioGenerator = generators.Base.extend({

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
module.exports = HubpolioGenerator;

require('./src/1initializing')(HubpolioGenerator);
require('./src/2prompts')(HubpolioGenerator);
require('./src/3configuring')(HubpolioGenerator);
require('./src/4default')(HubpolioGenerator);
require('./src/5writing')(HubpolioGenerator);
require('./src/6conflicts')(HubpolioGenerator);
require('./src/7install')(HubpolioGenerator);
require('./src/8end')(HubpolioGenerator);
