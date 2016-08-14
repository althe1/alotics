(function() {
  'use strict';

  angular
	.module('alotics')
	.controller('MainController', MainController);

  /** @ngInject */
  function MainController($http) {
	var vm = this;

	//TODO: check if logged in
	$http.get('/api/routes')
		.then(function(routes) {
			vm.routes = routes.data;
		}, function(err) {
			vm.error = err;
		});

  }
})();
