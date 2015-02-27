/**
 * @author ByungDae, Sohn (miconblog@gmail.com)
 * 
 * @sample
  github
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

module.exports = {
  load : function github(options){

    var params = {
      url:'https://api.github.com/users/miconblog/repos',
      headers: {
        'User-Agent':'Node'
      }
    };
    var deferred = Q.defer();
    var hubpolio = [];
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

        params.url = "https://raw.githubusercontent.com/" + repo.full_name + "/master/hub.json";

        request.get(params,  function(err, res, body){

          if( res.statusCode === 200 ){

              var hub = JSON.parse(body);

              if(options.provider) {
                hub.provider = 'github';
                hub.github = repo
              }

              hubpolio.push(hub);
          }

          refCount--;

          if(refCount === 0){
            deferred.resolve(hubpolio);
          }

        });

      });

    });

    return deferred.promise;

  }

};
