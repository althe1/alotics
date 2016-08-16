(function() {
	'use strict';

	angular.module('alotics')
	.factory('Route', RouteService);

	/** @ngInject */
	function RouteService($resource) {
		return $resource('/api/routes/:id', { id: '@id' }, {
			update: { method: 'PATCH' }
		});
	}
})();
