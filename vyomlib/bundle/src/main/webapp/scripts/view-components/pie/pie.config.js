(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.pie')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Donut Chart ',
                group: 'vyomlib',
                icon: 'chart_donut',
                type: 'com-vyom-vyomlib-pie',  // the name of runtime directive
                designType: 'com-vyom-vyomlib-pie-design', // register design directive
                designManagerService: 'comVyomVyomlibPieDesign',
                bundleId: 'com.vyom.vyomlib',

                // define component properties
                propertiesByName: [
                    {
                        name: 'recordDefinitionName',
                        type: 'string',
                        isConfig: true,
                        isRequired: true
                    },
                    {
                        name: 'Id',
                        isConfig: true,     // Input parameter
                        isRequired: false,  //  required
                        defaultValue: "pie"
                    },
                    {
                        name: 'fieldId',
                        isConfig: true,     // Input parameter
                        isRequired: false,  //  required
                    },
                    {
                        name: 'expr1',
                        isConfig: true,     // Input parameter
                        isRequired: false,  //  required
                        type: 'string'
                    },
                    {
                        name: 'color1',
                        type: 'string',
                        isConfig: true,     // Input parameter
                        isRequired: false,  //  required
                        defaultValue: 'golden'
                    },
                    {
                        name: 'name1',
                        type: 'string',
                        isConfig: true,     // Input parameter
                        isRequired: false,  //  required
                    },
                    {
                        name: 'expr2',
                        isConfig: true,     // Input parameter
                        isRequired: false,  //  required
                        type: 'string'
                    },
                    {
                        name: 'color2',
                        type: 'string',
                        isConfig: true,     // Input parameter
                        isRequired: false,  //  required
                        defaultValue: 'orange'
                    },
                    {
                        name: 'name2',
                        type: 'string',
                        isConfig: true,     // Input parameter
                        isRequired: false,  //  required
                    },
                    {
                        name: 'expr3',
                        isConfig: true,     // Input parameter
                        isRequired: false,  //  required
                        type: 'string'
                    },
                    {
                        name: 'color3',
                        type: 'string',
                        isConfig: true,     // Input parameter
                        isRequired: false,  //  required
                        defaultValue: 'white'
                    },
                    {
                        name: 'name3',
                        type: 'string',
                        isConfig: true,     // Input parameter
                        isRequired: false,  //  required
                    },
                    {
                        name: 'expr4',
                        isConfig: true,     // Input parameter
                        isRequired: false,  //  required
                        type: 'string'
                    },
                    {
                        name: 'color4',
                        type: 'string',
                        isConfig: true,     // Input parameter
                        isRequired: false,  //  required
                        defaultValue: 'white'
                    },
                    {
                        name: 'name4',
                        type: 'string',
                        isConfig: true,     // Input parameter
                        isRequired: false,  //  required
                    },
                    {
                        name: 'position',
                        type: 'number',
                        isConfig: true,     // Input parameter
                        isRequired: false,  //  required
                        defaultValue: '500'
                    },
                    {
                        name: 'size',
                        type: 'number',
                        isConfig: true,     // Input parameter
                        isRequired: false,  //  required
                        defaultValue: '400'
                    },
                    {
                        name: 'paddingHeight',
                        type: 'number',
                        isConfig: true,     // Input parameter
                        isRequired: false,  //  required
                        defaultValue: '230'
                    }
                ]
            };

            rxViewComponentProvider.registerComponent(starRatingDescriptor);
        });
})();