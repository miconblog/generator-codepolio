'use strict';

angular.module('hubpolio')
  .controller('MainCtrl', function ($scope, $resource) {

  	$resource('/app/hubfile.json')
      .query()
      .$promise
      .then(function(user) {
  		  console.log(user);
        $scope.portfolios = user;

        $scope.portfolios.forEach(function(portfolio) {
          portfolio.rank = Math.random();
        });

      });
  });
