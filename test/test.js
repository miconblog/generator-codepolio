var assert = require("assert");
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

var path = require('path');


describe('Hublipolio Generator', function(){

  describe('run test', function(){

    var runGen;

    var expected = [
      'package.json',
      'bower.json',
      '.editorconfig',
      '.jshintrc',
      'src',
      'gulp',
      'gulpfile.js'
  ];

    beforeEach(function () {
      runGen = helpers
        .run(path.join(__dirname, '../app'))
        .inDir(path.join(__dirname, '.tmp'))
        .withPrompts({'repositories':['Github','Bitbuckte'],'theme':'basic'})
        .withGenerators([[helpers.createDummyGenerator(), 'mocha:app']]);
    });

    it("created expected files",function(done) {
      runGen.on('end',function() {
        assert.file(expected);
        done();
      })
    });

  }) ;


});
