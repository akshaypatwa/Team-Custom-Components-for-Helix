(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.test')
        .directive('comVyomVyomlibTestDesign', function () {

            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/test/com-vyom-vyomlib-test-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();