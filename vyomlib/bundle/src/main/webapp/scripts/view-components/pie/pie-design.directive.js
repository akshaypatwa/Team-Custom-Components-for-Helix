(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.pie')
        .directive('comVyomVyomlibPieDesign', function () {

            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/pie/com-vyom-vyomlib-pie-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();