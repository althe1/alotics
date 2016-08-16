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

			vm.routes = Route.query(function(routes) {
				routes.forEach(function(route) {
					vm.editData[route.id] = false;
				});
			});

			vm.deleteRoute = function(id) {
				if (confirm('Are you sure?')) {
					Route.remove({ id: id }, function() {
						delete vm.editData[id];
						vm.routes = vm.routes.filter(function(route) {
							return route.id !== id;
						});
					});
				}
			};

			vm.submitRoute = function() {
				Route.save(vm.routeForm, function(route) {
					vm.showForm = false;
					vm.editData[route.id] = false;
					vm.routes.push(route);
					vm.routeForm = {};
				});
			};

			vm.updateRoute = function(updatedRoute) {
				Route.update(updatedRoute, function() {
					vm.editData[updatedRoute.id] = false;
					vm.routes.forEach(function(route) {
						if (updatedRoute.id === route.id) {
							angular.extend(route, updatedRoute);
						}
					});
				});
			};
		}
	}
})();
