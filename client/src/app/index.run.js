(function() {
  'use strict';

  angular
    .module('alotics')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {

    $rootScope.$on('auth:login-success', function() {
      $location.path('/');
    });

    $log.debug('runBlock end');
    
  }

})();
