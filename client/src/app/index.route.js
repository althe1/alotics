(function() {
  'use strict';

  angular
    .module('alotics')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/user_sessions/login.html',
        controller: 'SessionController',
        controllerAs: 'session'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/user_sessions/signup.html',
        controller: 'SessionController',
        controllerAs: 'session'
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
