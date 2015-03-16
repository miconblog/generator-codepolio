'use strict';

angular.module('hubpolio')
  .controller('MainCtrl', function ($scope) {
    
    $scope.portfolios = [];


    $scope.portfolios.forEach(function(portfolio) {
      portfolio.rank = Math.random();
    });


  });
