(function() {
	'use strict';

	angular
    .module('alotics')
    .run(runBlock);

	/** @ngInject */
	function runBlock($log, $rootScope, $state) {

    $rootScope.$on('auth:login-success', function() {
			$state.go('main.routes');
    });

    $log.debug('runBlock end');

	}

})();
