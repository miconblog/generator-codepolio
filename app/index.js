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

require('./src/initializing')(HubpolioGenerator);
require('./src/prompts')(HubpolioGenerator);
require('./src/configuring')(HubpolioGenerator);
require('./src/default')(HubpolioGenerator);
require('./src/writing')(HubpolioGenerator);
require('./src/conflicts')(HubpolioGenerator);
require('./src/install')(HubpolioGenerator);
require('./src/end')(HubpolioGenerator);
