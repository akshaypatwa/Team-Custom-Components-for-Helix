// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.gantt')
        .factory('comVyomVyomlibGanttDesign',
            function (comVyomVyomlibGanttModel, rxGUID, RX_DEFINITION_PICKER) {
                function getRxConfig(componentDefinition, componentDescriptor) {
                    return {
                        id: componentDefinition.guid || rxGUID.generate(),
                        type: componentDefinition.type,
                        rxData: getRxData(componentDefinition, componentDescriptor),
                        rxInspector: getRxInspector()
                    };
                }

                // Getting configuration defined in Innovation Studio parameters.
                // We can also setup default values.
                function getRxData(componentDefinition, componentDescriptor) {
                    // var defaultMBGColor = _.find(componentDescriptor.propertiesByName, {
                    //     name: 'color'
                    // }).defaultValue;

                    return {
                        // recordDefinitionName: componentDefinition.propertiesByName.recordDefinitionName,
                        // data1: componentDefinition.propertiesByName.color1,
                        // color1: componentDefinition.propertiesByName.color2,
                        // data2: componentDefinition.propertiesByName.color1,
                        // color2: componentDefinition.propertiesByName.color2,
                        // data3: componentDefinition.propertiesByName.color1,
                        // color3: componentDefinition.propertiesByName.color2,
                        // data4: componentDefinition.propertiesByName.color1,
                        // color4: componentDefinition.propertiesByName.color2,
                        // width: componentDefinition.propertiesByName.width,
                        // height: componentDefinition.propertiesByName.height
                    };
                }

                // Defining the parameters types with helper.
                function getRxInspector() {
                    return {
                        inputs: {
                            rxData: {
                                // recordDefinitionName: {
                                //     label: 'Record Definition Name',
                                //     type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                                //     definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                                //     group: 'general',
                                //     index: 1
                                // },

                                // data1: {
                                //     label: 'Data 1',
                                //     type: 'rx-inspector-expression-node-field',
                                //     group: 'configuration',
                                //     index: 1
                                // },
                                // color1: {
                                //     label: 'Color 1',
                                //     type: 'rx-inspector-expression-node-field',
                                //     group: 'configuration',
                                //     index: 2
                                // },
                                // data2: {
                                //     label: 'Data 2',
                                //     type: 'rx-inspector-expression-node-field',
                                //     group: 'configuration',
                                //     index: 3
                                // },
                                // color2: {
                                //     label: 'Color 2',
                                //     type: 'rx-inspector-expression-node-field',
                                //     group: 'configuration',
                                //     index: 4
                                // },
                                // data3: {
                                //     label: 'Data 3',
                                //     type: 'rx-inspector-expression-node-field',
                                //     group: 'configuration',
                                //     index: 5
                                // },
                                // color3: {
                                //     label: 'Color 3',
                                //     type: 'rx-inspector-expression-node-field',
                                //     group: 'configuration',
                                //     index: 6
                                // },
                                // data4: {
                                //     label: 'Data 4',
                                //     type: 'rx-inspector-expression-node-field',
                                //     group: 'configuration',
                                //     index: 7
                                // },
                                // color4: {
                                //     label: 'Color 4',
                                //     type: 'rx-inspector-expression-node-field',
                                //     group: 'configuration',
                                //     index: 8
                                // },
                                // width: {
                                //     label: 'Pie_Width',
                                //     type: 'rx-inspector-expression-node-field',
                                //     group: 'Dimentions',
                                //     index: 1
                                // },
                                // height: {
                                //     label: 'Pie_Height',
                                //     type: 'rx-inspector-expression-node-field',
                                //     group: 'Dimentions',
                                //     index: 2
                                // }
                            }
                        },
                        groups: {
                            general: {
                                label: 'General',
                                index: 1
                            },
                            configuration: {
                                label: 'chart Configuration',
                                index: 2
                            },
                            dimentions: {
                                label: 'Dimentions',
                                index: 3
                            }
                        }
                    };
                }

                return {
                    //  should return a model instance
                    getModel: function (componentDefinition, componentDescriptor) {
                        return new comVyomVyomlibGanttModel(getRxConfig(componentDefinition, componentDescriptor));
                    }
                };
            });
})();