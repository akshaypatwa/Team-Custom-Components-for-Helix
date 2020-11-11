(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.bar')
        .directive('comVyomVyomlibBarDesign', function () {

            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/bar/com-vyom-vyomlib-bar-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();