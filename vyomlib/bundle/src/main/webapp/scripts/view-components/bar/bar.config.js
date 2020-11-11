(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.bar')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'bar',
                group: 'vyomlib',
                icon: 'chart_bar',
                type: 'com-vyom-vyomlib-bar',  // the name of runtime directive
                designType: 'com-vyom-vyomlib-bar-design', // register design directive
                designManagerService: 'comVyomVyomlibBarDesign',
                bundleId: 'com.vyom.vyomlib',

                // define component properties
                propertiesByName: [
                    // {
                    //     name: 'recordDefinitionName',
                    //     type: 'string',
                    //     isConfig: true,     // Input parameter
                    //     isRequired: true,  // required
                    // },
                    // {
                    //     name: 'data1',
                    //     type: 'number',
                    //     isConfig: true,     // Input parameter
                    //     isRequired: false,  //  required
                    // },
                    // {
                    //     name: 'color1',
                    //     type: 'string',
                    //     isConfig: true,     // Input parameter
                    //     isRequired: false,  //  required
                    //     // defaultValue: '#3399FF'
                    // },
                    // {
                    //     name: 'data2',
                    //     type: 'number',
                    //     isConfig: true,     // Input parameter
                    //     isRequired: false,  //  required
                    // },
                    // {
                    //     name: 'color2',
                    //     type: 'string',
                    //     isConfig: true,     // Input parameter
                    //     isRequired: false,  //  required
                    //     // defaultValue: 'orange'
                    // },
                    // {
                    //     name: 'data3',
                    //     type: 'number',
                    //     isConfig: true,     // Input parameter
                    //     isRequired: false,  //  required
                    // },
                    // {
                    //     name: 'color3',
                    //     type: 'string',
                    //     isConfig: true,     // Input parameter
                    //     isRequired: false,  //  required
                    //     // defaultValue: 'blue'
                    // },
                    // {
                    //     name: 'data4',
                    //     type: 'number',
                    //     isConfig: true,     // Input parameter
                    //     isRequired: false,  //  required
                    // },
                    // {
                    //     name: 'color4',
                    //     type: 'string',
                    //     isConfig: true,     // Input parameter
                    //     isRequired: false,  //  required
                    //     // defaultValue: 'green'
                    // },
                    // {
                    //     name: 'width',
                    //     type: 'number',
                    //     isConfig: true,     // Input parameter
                    //     isRequired: false,  //  required
                    //     defaultValue: '500'
                    // },
                    // {
                    //     name: 'height',
                    //     type: 'number',
                    //     isConfig: true,     // Input parameter
                    //     isRequired: false,  //  required
                    //     defaultValue: '400'
                    // }
                ]
            };

            rxViewComponentProvider.registerComponent(starRatingDescriptor);
        });
})();