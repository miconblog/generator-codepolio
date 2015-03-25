'use strict';

angular.module('codepolio')
  .controller('MainCtrl', function ($scope, $resource) {

    $resource('sweetcode.jam')
      .get()
      .$promise
      .then(function(codejam) {
        
        var public_repos_count = 0;
        
        $scope.repos = codejam.repos;
        $scope.repos.forEach(function(item){

          if(!item.private){
            public_repos_count++;
          }

          if( item.language ){
            item.language = ", " + item.language
          }

        });

        $scope.owner = codejam.repos[0].owner;
        $scope.statistics = {
          public_repos_count : public_repos_count,
          private_repos_count: $scope.repos.length - public_repos_count
        }
        $scope.repos.forEach(function(repo) {
          repo.rank = Math.random();
        });        
        $scope.updateinfo = {
          generated_at : moment().fromNow()
        }
      });
  });
