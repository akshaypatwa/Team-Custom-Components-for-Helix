(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.bar')
        .directive('comVyomVyomlibBar',
            function (rxViewComponentEventManager, rxRecordInstanceDataPageResource, $window) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/bar/com-vyom-vyomlib-bar.directive.html',

                    // rxConfiguration is used to get input parameters:
                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope, window) {
                        var _config;

                        // Getting the view component input parameters
                        function init() {
                            // Getting the view component input parameters
                            _config = $scope.rxConfiguration.propertiesByName;
                            $scope.cfg = {};
                            $scope.cfg.recordDefinitionName = _config.recordDefinitionName;
                            $scope.data1 = _config.data1;
                            $scope.data2 = _config.data2;
                            $scope.data3 = _config.data3;
                            $scope.data4 = _config.data4;
                            $scope.color1 = _config.color1;
                            $scope.color2 = _config.color2;
                            $scope.color3 = _config.color3;
                            $scope.color4 = _config.color4;
                            $scope.width = _config.width;
                            $scope.Height = _config.height;
                            $scope.myData = [];

                            $scope.getData();

                        }

                        $scope.getData = function () {
                            $scope.NewCnt = 0;
                            $scope.closedCnt = 0;
                            $scope.p1 = 0;
                            $scope.p2 = 0;
                            //record of technology
                            var queryParams = {
                                propertySelection: "7,8",
                            };

                            var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.recordDefinitionName);
                            foo.get(10, 0, queryParams).then(
                                function (allRecords) {
                                    $scope.myData = allRecords.data;

                                    angular.element(document).ready(function () {
                                        $scope.load();
                                    });
                                }
                            );
                        }
                        $scope.load = function () {
                            var margin = { top: 10, right: 30, bottom: 90, left: 40 },
                                width = 460 - margin.left - margin.right,
                                height = 450 - margin.top - margin.bottom;

                            // append the svg object to the body of the page
                            var svg = d3.select("#pie")
                                .append("svg")
                                .attr("width", width + margin.left + margin.right)
                                .attr("height", height + margin.top + margin.bottom)
                                .append("g")
                                .attr("transform",
                                    "translate(" + margin.left + "," + margin.top + ")");

                            // Parse the Data
                            d3.csv("/com.vyom.vyomlib/resources/bar.csv", function (data) {

                                // X axis
                                var x = d3.scaleBand()
                                    .range([0, width])
                                    .domain(data.map(function (d) { return d.Country; }))
                                    .padding(0.2);
                                svg.append("g")
                                    .attr("transform", "translate(0," + height + ")")
                                    .call(d3.axisBottom(x))
                                    .selectAll("text")
                                    .attr("transform", "translate(-10,0)rotate(-45)")
                                    .style("text-anchor", "end");

                                // Add Y axis
                                var y = d3.scaleLinear()
                                    .domain([0, 13000])
                                    .range([height, 0]);
                                svg.append("g")
                                    .call(d3.axisLeft(y));

                                // Bars
                                svg.selectAll("mybar")
                                    .data(data)
                                    .enter()
                                    .append("rect")
                                    .attr("x", function (d) { return x(d.Country); })
                                    .attr("width", x.bandwidth())
                                    .attr("fill", "#69b3a2")
                                    // no bar at the beginning thus:
                                    .attr("height", function (d) { return height - y(0); }) // always equal to 0
                                    .attr("y", function (d) { return y(0); })

                                // Animation
                                svg.selectAll("rect")
                                    .transition()
                                    .duration(800)
                                    .attr("y", function (d) { return y(d.Value); })
                                    .attr("height", function (d) { return height - y(d.Value); })
                                    .delay(function (d, i) { console.log(i); return (i * 100) })

                            })

                        }

                        init();
                    }
                };
            });
})();