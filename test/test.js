var assert = require("assert");
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

var path = require('path');


describe('Codepolio Scaffolding', function(){

  describe('must have some files and folders after generating', function(){

    var runGen;

    var expected = [
      ".editorconfig",
      ".jshintrc",
      ".yo-rc.json",
      "bower.json",
      "gulpfile.js",
      "package.json",
      "src",
      "gulp"
    ];

    beforeEach(function () {
      runGen = helpers
        .run(path.join(__dirname, '../app'))
        .inDir(path.join(__dirname, '.tmp'))
        .withPrompts({'repositories':['github'],'theme':'twitter'})
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
