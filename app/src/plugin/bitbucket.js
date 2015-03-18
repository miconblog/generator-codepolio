/**
 * @author ByungDae, Sohn (miconblog@gmail.com)
 * 
 * @sample
  bitbucket
  .load()
  .then(function(repos){
    console.log(repos)
  })
  .fail(function (error) {
      // Handle any error from all above steps
    console.log('fail', error);
  });
 */

'use strict';

var Q = require('q');
var request = require('request');
var _ = require('lodash');
var chalk = require('chalk');
var moment = require('moment');

module.exports = {
  load : function bitbucket(options){

    var params = {
      url:'https://bitbucket.org/api/2.0/repositories/<%= username %>',
      headers: {
        'User-Agent':'Node'
      }
    };
    var deferred = Q.defer();
    var codejam = [];
    var refCount = 0;
    var options = _.extend({}, options);
    _.defaults(options, {
      provider : false
    });

    request.get(params, function(err, res, body){

      if( err ) {
        return deferred.reject(new Error(err));
        
      }

      if( res.statusCode !== 200 ){
        return deferred.reject(new Error('check your github account name'));
      }

      var repos = JSON.parse(body);
      refCount = repos.length;

      repos.forEach(function(repo){

        // https://bitbucket.org/miconblog/maeul/raw/202eff3c1cb8eb5ede6b3543ef576310a16a9efa/README.md

        params.url = "https://bitbucket.org/" + repo.full_name + "/master/code.jam";

        request.get(params,  function(err, res, body){

          if( res.statusCode === 200 ){
            
            try{
              var jam = JSON.parse(body);
              jam.generated_at = moment().format()
              jam.provider = 'github';
              jam.github = repo
              codejam.push(jam);
            } catch(e){
              console.log(chalk.red('[JSON parse Error] check your code.jam file in', repo.full_name));
            }
          }

          refCount--;

          if(refCount === 0){
            deferred.resolve(codejam);
          }

        });

      });

    });

    return deferred.promise;

  }

};
