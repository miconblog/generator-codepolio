'use strict';

angular.module('hubpolio')
  .controller('MainCtrl', function ($scope, $resource) {

  	$resource('/app/hubfile.json')
      .query()
      .$promise
      .then(function(portfolios) {
  		  
        var public_repos_count = 0;
        
        $scope.portfolios = portfolios;

        portfolios.forEach(function(item){

          if(!item.private){
            public_repos_count++;
          }

        });

        $scope.owner = portfolios[0].owner;
        $scope.statistics = {
          public_repos_count : public_repos_count,
          private_repos_count: portfolios.length - public_repos_count
        }
        $scope.portfolios.forEach(function(portfolio) {
          portfolio.rank = Math.random();
        });        
        $scope.updateinfo = {
          generated_at : moment().fromNow()
        }
      });
  });
