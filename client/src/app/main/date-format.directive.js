(function() {
	'use strict';

	angular
	.module('alotics')
	.directive('dateFormat', dateFormat);

	/** @ngInject */
	function dateFormat() {
		return {
			restrict : 'A',
			scope : {
					ngModel : '='
			},
			link: function (scope) {
				if (scope.ngModel) scope.ngModel = new Date(scope.ngModel);
			}
		}
	}
})();
