(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.gantt')
        .directive('comVyomVyomlibGanttDesign', function () {

            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/gantt/com-vyom-vyomlib-gantt-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();