'use strict';

angular.module('themeSquare')
  .controller('MainCtrl', function ($scope) {
    
    $scope.portfolios = [ 
      { 
        title: 'Syrup',
        images: [''],
        description: 'make your portfolio site with your repositories',
        logo: 'syrup.png',
        thumb: 'syrub-app.png',
        type: 'web',
        provider: 'github',
        repo_url: 'https://github.com/miconblog/hubfolio',
        updated_at: moment('2015-01-22T05:24:36Z').format('LLL'),
        github: {
          html_url: 'https://github.com/miconblog/hubfolio',
        }
      },
      { 
        title: 'Syrup Order',
        images: [''],
        description: 'make your portfolio site with your repositories',
        logo: 'syrup-order.png',
        thumb: 'hqdefault.jpg',
        type: 'web',
        provider: 'github',
        repo_url: 'https://github.com/miconblog/hubfolio',
        updated_at: moment('2015-01-22T05:24:36Z').format('LLL'),
        github: {
          html_url: 'https://github.com/miconblog/hubfolio',
        }
      },
      { 
        title: 'pickat',
        images: [''],
        description: 'pick your place!',
        logo: 'pickat.png',
        thumb: 'pickat2.jpg',
        type: 'web',
        provider: 'github',
        repo_url: 'https://github.com/miconblog/hubfolio',
        updated_at: moment('2015-01-22T05:24:36Z').format('LLL'),
        github: {
          html_url: 'https://github.com/miconblog/hubfolio',
        }
      },
      { 
        title: 'Hubpolio',
        images: [''],
        description: 'make your portfolio site with your repositories',
        logo: 'hub-logo.png',
        thumb: 'hubpolio.png',
        type: 'web',
        provider: 'github',
        repo_url: 'https://github.com/miconblog/hubfolio',
        updated_at: moment('2015-01-22T05:24:36Z').format('LLL'),
        github: {
          html_url: 'https://github.com/miconblog/hubfolio',
        }
      },
      { 
        title: 'OKcashbag',
        images: [''],
        description: '전국 4만 5천여 가맹점 포인트 관리를 한번에..',
        logo: 'ocb.png',
        thumb: 'ok.jpg',
        type: 'web',
        provider: 'github',
        repo_url: 'https://github.com/miconblog/hubfolio',
        updated_at: moment('2015-01-22T05:24:36Z').format('LLL'),
        github: {
          html_url: 'https://github.com/miconblog/hubfolio',
        }
      }
    ];


    $scope.portfolios.forEach(function(portfolio) {
      portfolio.rank = Math.random();
    });


  });
