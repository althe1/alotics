(function() {
  'use strict';

  angular
    .module('alotics')
    .controller('SessionController', SessionController);

  /** @ngInject */
  function SessionController($scope, $log, $auth) {
    var vm = this;

    $scope.$on('auth:login-error', function(ev, reason) {
		vm.error = reason.errors[0];
		$log.error(reason);
		// TODO: add error to view
    });
  }
})();
