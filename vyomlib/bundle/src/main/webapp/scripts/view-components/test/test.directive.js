(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.test')
        .directive('comVyomVyomlibTest',
            function (rxRecordInstanceDataPageResource) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/test/com-vyom-vyomlib-test.directive.html',

                    // rxConfiguration is used to get input parameters:
                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope) {
                        var _param;
                        _param = $scope.rxConfiguration.propertiesByName;
                        $scope.data1 = _param.data1;
                        console.log(_param);
                        $scope.data2 = _param.data2;

                        $scope.button = function () {
                            console.log($scope.data1);
                        }
                    }
                };
            });
})();