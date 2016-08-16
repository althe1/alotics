(function() {
	'use strict';

	angular
		.module('alotics')
		.controller('RouteController', RouteController);

	/** @ngInject */
	function RouteController(Route, $auth) {
		var vm = this;

		if ($auth.validateUser()) {
			vm.routes = [];
			vm.showForm = false;
			vm.routeForm = {};
			vm.editData = {};

			vm.routes = Route.query();

			vm.routes.forEach(function(route) {
				vm.editingData[route.id] = false;
			});

			vm.deleteRoute = function(id) {
				if (confirm('Are you sure?')) {
					Route.remove({ id: id }, function() {
						vm.routes = vm.routes.filter(function(route) {
							return route.id !== id;
						});
					});
				}
			};

			vm.submitRoute = function() {
				Route.save(vm.routeForm, function(data) {
					vm.showForm = false;
					vm.routes.push(data);
					vm.routeForm = {};
				});
			};

			vm.updateRoute = function(route) {
				Route.update(route);
			};
		}

	}
})();
