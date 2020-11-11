(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.test')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'test',
                group: 'vyomlib',
                icon: 'at',
                type: 'com-vyom-vyomlib-test',  // the name of runtime directive
                designType: 'com-vyom-vyomlib-test-design', // register design directive
                bundleId: 'com.vyom.vyomlib',

                // define component properties
                propertiesByName: [
                    {
                        name: 'data1',
                        type: "string",
                        isConfig: true,     // Input parameter
                        isRequired: false,  //  required
                        enableExpressionEvaluation: true
                    },
                    {
                        name: 'data2',
                        // type: 'number',
                        isConfig: true,     // Input parameter
                        isRequired: false,  //  required
                        enableExpressionEvaluation: true
                    }
                ]
            };

            rxViewComponentProvider.registerComponent(starRatingDescriptor);
        });
})();