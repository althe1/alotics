(function() {
  'use strict';

  angular
	.module('alotics')
	.directive('dateFormat', dateFormat);

  /** @ngInject */
  function dateFormat() {
	  return {
			require: 'ngModel',
	    link: function(scope, element, attr, ngModelCtrl) {
				ngModelCtrl.$formatters.length = 0;
	      ngModelCtrl.$parsers.length = 0;
		  }
		}
	}
})();
