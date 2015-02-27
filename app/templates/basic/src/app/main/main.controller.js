'use strict';
/*jshint esnext: true */

class MainCtrl {
  constructor ($scope) {
    $scope.portfolios = [ 
      
    ];


    $scope.portfolios.forEach(function(portfolio) {
      portfolio.rank = Math.random();
    });
  }
}

MainCtrl.$inject = ['$scope'];

export default MainCtrl;
