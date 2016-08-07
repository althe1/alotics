(function() {
  'use strict';

  angular
    .module('alotics')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('routes', {
        url: '/routes',
        templateUrl: 'app/routes/routes.html',
        controller: 'RouteController',
        controllerAs: 'route'
      })
      .state('routes.points', {
        url: '/:route_id',
        templateUrl: 'app/points/points.html',
        controller: 'PointController',
        controllerAs: 'point'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
