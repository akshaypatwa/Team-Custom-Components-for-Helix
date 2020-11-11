// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.pie')
        .factory('comVyomVyomlibPieDesign',
            function (comVyomVyomlibPieModel, rxGUID, RX_DEFINITION_PICKER) {
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
                        recordDefinitionName: componentDefinition.propertiesByName.recordDefinitionName,
                        Id: componentDefinition.propertiesByName.Id,
                        fieldId: componentDefinition.propertiesByName.fieldId,
                        expr1: componentDefinition.propertiesByName.expr1,
                        color1: componentDefinition.propertiesByName.color1,
                        name1: componentDefinition.propertiesByName.name1,
                        expr2: componentDefinition.propertiesByName.expr2,
                        color2: componentDefinition.propertiesByName.color2,
                        name2: componentDefinition.propertiesByName.name2,
                        expr3: componentDefinition.propertiesByName.expr3,
                        color3: componentDefinition.propertiesByName.color3,
                        name3: componentDefinition.propertiesByName.name3,
                        expr4: componentDefinition.propertiesByName.expr4,
                        color4: componentDefinition.propertiesByName.color4,
                        name4: componentDefinition.propertiesByName.name4,
                        width: componentDefinition.propertiesByName.width,
                        height: componentDefinition.propertiesByName.height,
                        paddingHeight: componentDefinition.propertiesByName.paddingHeight
                    };
                }

                // Defining the parameters types with helper.
                function getRxInspector() {
                    return {
                        inputs: {
                            rxData: {
                                recordDefinitionName: {
                                    label: 'Record Definition Name',
                                    type: 'rx-inspector-definition-picker',
                                    definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type,
                                    group: 'general',
                                    index: 1
                                },
                                Id: {
                                    label: 'Id',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'general',
                                    index: 2
                                },
                                fieldId: {
                                    label: 'Field Id',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'general',
                                    index: 3
                                },
                                name1: {
                                    label: 'Legend 1',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'configuration',
                                    index: 1
                                },
                                color1: {
                                    label: 'Color 1',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'configuration',
                                    index: 2
                                },
                                name2: {
                                    label: 'Legend 2',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'configuration',
                                    index: 3
                                },
                                color2: {
                                    label: 'Color 2',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'configuration',
                                    index: 4
                                },
                                name3: {
                                    label: 'Legend 3',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'configuration',
                                    index: 5
                                },
                                color3: {
                                    label: 'Color 3',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'configuration',
                                    index: 6
                                },
                                name4: {
                                    label: 'Legend 4',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'configuration',
                                    index: 7
                                },
                                color4: {
                                    label: 'Color 4',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'configuration',
                                    index: 8
                                },
                                width: {
                                    label: 'Pie_Width',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'Dimentions',
                                    index: 1
                                },
                                height: {
                                    label: 'Pie_Height',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'Dimentions',
                                    index: 2
                                },
                                paddingHeight: {
                                    label: 'Padding_Height',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'Dimentions',
                                    index: 3
                                },
                                expr1: {
                                    label: 'Filter Expression For First Data',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'queryExpression',
                                    index: 1
                                },
                                expr2: {
                                    label: 'Filter Expression For Second Data',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'queryExpression',
                                    index: 2
                                },
                                expr3: {
                                    label: 'Filter Expression For Third Data',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'queryExpression',
                                    index: 3
                                },
                                expr4: {
                                    label: 'Filter Expression For Fourth Data',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'queryExpression',
                                    index: 4
                                }
                            }
                        },
                        groups: {
                            general: {
                                label: 'General',
                                index: 1
                            },
                            queryExpression: {
                                label: 'Query Expression',
                                index: 2
                            },
                            configuration: {
                                label: 'chart Configuration',
                                index: 3
                            },
                            dimentions: {
                                label: 'Dimentions',
                                index: 4
                            },

                        }
                    };
                }

                return {
                    //  should return a model instance
                    getModel: function (componentDefinition, componentDescriptor) {
                        return new comVyomVyomlibPieModel(getRxConfig(componentDefinition, componentDescriptor));
                    }
                };
            });
})();