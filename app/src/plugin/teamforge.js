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
var exec = require('child_process').exec;
var Checkout = require("nodegit").Checkout;

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

    // TODO : for each문으로 변경 해야 함.
    var repositoryIds = [];
    info.scm.getRepositoryList({'sessionId': info.sessionId,'projectId':info.projectList[3].id.$value},function(err,repositoryInfo) {

        if( err ) {
            return deferred.reject(new Error(err));
        }

        _.forEach(repositoryInfo.getRepositoryListReturn.dataRows.dataRows,function(value,id) {
            repositoryIds.push(repositoryInfo.getRepositoryListReturn.dataRows.dataRows[id].id.$value);
        });

        info['repositoryIds'] = repositoryIds;

        deferred.resolve(info);
    });



    return deferred.promise;
}


function getScmInfos(info) {

    var deferred = Q.defer();

    var scmInfos =[];
    _.forEach(info.repositoryIds,function(value,id){
        info.scm.getSCMCheckoutCommand({'sessionId':info.sessionId,'repositoryId':value,'userName':'jaejin.yun'},function(err,result) {


            var scmCommand =result.getSCMCheckoutCommandReturn.$value;

            var scmRepo = '';
            if(scmCommand.substr(0,3) == 'svn') {
                scmRepo = scmCommand.substring(scmCommand.indexOf('http'));
            } else {
                scmRepo = scmCommand.substring(scmCommand.indexOf('git'));
            }

            scmInfos.push({'scmType':scmCommand.substr(0,3),'scmRepo':scmRepo})
        });
    });

    info['scmInfos'] = scmInfos;
    deferred.resolve(info);

    return deferred.promise;

}



function getCodepolio(info) {
    var deferred = Q.defer();



    _.forEach(info.scmInfos,function(value,key){
       if(value.scmType == 'svn') {

       } else {

       }
    });

    deferred.resolve(info);
    // git clone -n ssh://jaejin.yun@skvalley.com:29418/log2 --depth 1
    // git checkout
    // TODO: git 으로 파일 한개만 가져오기 & svn cat으로 파일 가져오기

    return deferred.promise;
}


function getFileFromGit(url) {

}

module.exports = {
    load : function github(options){

        var codejam = [];
        var options = _.extend({}, options);
        _.defaults(options, {
            provider : false
        });

        var result = {'options':options};

        return getClient('client',options.url,options.endPointUrl,result)
            .then(getLogin)
            .then(getProjectList)
            .then(getScm)
            .then(getRepository)
            .then(getScmInfos)
            .then(getCodepolio);
    }

};


