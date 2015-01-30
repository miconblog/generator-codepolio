/**
 * @author Yun, Jaejin (spyrgoira256@gmail.com)
 *
 * @sample
 skvalley
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
var _ = require('lodash');
var soap = require('soap');



function getClient(name,url,endPointUrl, result) {

    var deferred = Q.defer();

    soap.createClient(url, function(err,client) {
        if( err ) {
            return deferred.reject(new Error(err));
        }

        result[name]=client;
        deferred.resolve(result);

    },endPointUrl);

    return deferred.promise;
}


function getLogin(result) {

    var deferred = Q.defer();


    result.client.login({'userName':result.options.userName,'password':result.options.password}, function(err,loginInfo) {
        if( err ) {
            return deferred.reject(new Error(err));
        }



        result['loginInfo'] = loginInfo;
        result['sessionId'] = loginInfo.loginReturn.$value;
        deferred.resolve(result);
    });

    return deferred.promise;
}

function getProjectList(info) {
        var deferred = Q.defer();
        info.client.getProjectList({'sessionId':info.sessionId,fetchHierarchyPath:true},function(err,projectList){
            if( err ) {
                return deferred.reject(new Error(err));
            }

            info['projectList']  = projectList.getProjectListReturn.dataRows.dataRows;

            deferred.resolve(info);
        });

    return deferred.promise;
}


function getScm(info) {
    return getClient('scm',info.options.scmWsdl,info.options.scmLocation,info);
}

function getRepository(info) {
    var deferred = Q.defer();

    info.scm.getRepositoryList({'sessionId': info.sessionId,'projectId':info.projectList[0].id.$value},function(err,repositoryInfo) {

        if( err ) {
            return deferred.reject(new Error(err));
        }

        console.log(repositoryInfo.getRepositoryListReturn.dataRows.dataRows);
        deferred.resolve(info);
    });



    return deferred.promise;
}

module.exports = {
    load : function github(options){

        var hubpolio = [];
        var options = _.extend({}, options);
        _.defaults(options, {
            provider : false
        });

        var result = {'options':options};

        return getClient('client',options.url,options.endPointUrl,result)
            .then(getLogin)
            .then(getProjectList)
            .then(getScm)
            .then(getRepository);
    }

};


