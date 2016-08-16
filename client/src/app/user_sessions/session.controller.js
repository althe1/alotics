(function() {
  'use strict';

  angular
    .module('alotics')
    .controller('SessionController', SessionController);

  /** @ngInject */
  function SessionController($scope, $log, $auth) {
    var vm = this;

    $scope.$on('auth:login-error', function(ev, reason) {
      $log.log(reason);
			vm.error = reason.errors[0];
    });

    $scope.$on('auth:registration-email-error', function(ev, reason) {
		  vm.error = reason.errors.full_messages[0];
		});

    vm.handleRegBtnClick = function(regForm) {
      $auth.submitRegistration(regForm)
        .then(function() {
          $auth.submitLogin({
            email: regForm.email,
            password: regForm.password
          });
        });
    };
  }
})();
