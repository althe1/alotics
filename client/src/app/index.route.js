(function() {
  'use strict';

  angular
    .module('alotics')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        abstract: true,
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('main.routes', {
        url: '',
        templateUrl: 'app/routes/routes.html',
        controller: 'RouteController',
        controllerAs: 'route'
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
      });

    $urlRouterProvider.otherwise('/');
  }

})();
