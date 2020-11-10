(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.topheader-param').factory('comVyomVyomlibTopheaderParamDesign', function (comVyomVyomlibTopheaderParamModel, rxGUID, RX_DEFINITION_PICKER) {
        function getRxConfig(componentDefinition, componentDescriptor) {
            return {
                id: componentDefinition.guid || rxGUID.generate(),
                type: componentDefinition.type,
                rxData: getRxData(componentDefinition, componentDescriptor),
                rxInspector: getRxInspector()
            };
        }


        function getRxData(componentDefinition, componentDescriptor) {


            return {

                text: componentDefinition.propertiesByName.text,
                appname: componentDefinition.propertiesByName.appname,
                hyperlink: componentDefinition.propertiesByName.hyperlink,
                toggleicon: componentDefinition.propertiesByName.toggleicon,
                togglefont: componentDefinition.propertiesByName.togglefont,
                bgcolor: componentDefinition.propertiesByName.bgcolor
            };
        }

        // Defining the parameters types with helper.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {
                        text: {
                            label: 'text',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 1
                        },
                        appname: {
                            label: 'appname',
                            type: 'text',
                            group: 'general',
                            value: 'application',
                            index: 2
                        },
                        hyperlink: {
                            label: 'hyperlink',
                            type: 'text',
                            group: 'general',
                            index: 3
                        },
                        toggleicon: {
                            label: 'Hide Icon',
                            type: 'rx-inspector-optional-expression',
                            group: 'general',

                            index: 4
                        },
                        togglefont: {
                            label: 'Show Ericfont',
                            type: 'rx-inspector-optional-expression',
                            group: 'general',

                            index: 5
                        },
                        bgcolor: {
                            label: 'Header Background Color',
                            type: 'com-vyom-vyomlib-inspector-topheader-param-bgcolor',
                            group: 'general',
                            index: 6
                        }

                    }
                },
                groups: {
                    general: {
                        label: 'General',
                        index: 1
                    }
                }
            };
        }

        return {
            // should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comVyomVyomlibTopheaderParamModel(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
