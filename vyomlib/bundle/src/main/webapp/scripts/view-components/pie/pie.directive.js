(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.pie')
        .directive('comVyomVyomlibPie',
            function (rxRecordInstanceDataPageResource) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/pie/com-vyom-vyomlib-pie.directive.html',

                    // rxConfiguration is used to get input parameters:
                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope) {
                        var _param;

                        function init() {
                            _param = $scope.rxConfiguration.propertiesByName;
                            $scope.recordDefinitionName = _param.recordDefinitionName;
                            $scope.myData = [];

                            $scope.filterExpr = [];
                            $scope.fieldId = _param.fieldId;
                            $scope.filterExpr[0] = _param.expr1;
                            $scope.filterExpr[1] = _param.expr2;
                            $scope.filterExpr[2] = _param.expr3;
                            $scope.filterExpr[3] = _param.expr4;

                            $scope.color1 = _param.color1;
                            $scope.color2 = _param.color2;
                            $scope.color3 = _param.color3;
                            $scope.color4 = _param.color4;

                            $scope.name1 = _param.name1;
                            $scope.name2 = _param.name2;
                            $scope.name3 = _param.name3;
                            $scope.name4 = _param.name4;

                            $scope.paddingHeight = _param.paddingHeight;
                            $scope.width = _param.width; //position
                            $scope.Height = _param.height; //size
                            $scope.id = _param.Id;
                            $scope.cnt = [];
                            $scope.arr = [];

                            $scope.getData($scope.filterExpr[0]);
                            if ($scope.filterExpr[1] != "") {
                                setTimeout(function afterTwoSeconds() {
                                    $scope.getData($scope.filterExpr[1]);
                                }, 2000)
                            }
                            if ($scope.filterExpr[2] != "") {
                                setTimeout(function afterThreeSeconds() {
                                    $scope.getData($scope.filterExpr[2]);
                                }, 3000)
                            }
                            if ($scope.filterExpr[3] != "") {
                                setTimeout(function afterFourSeconds() {
                                    $scope.getData($scope.filterExpr[3])
                                }, 4000)
                            }
                            setTimeout(function afterFiveSeconds() {
                                $scope.load();
                            }, 5000)
                        }

                        $scope.getData = function (expression) {

                            rxRecordInstanceDataPageResource.withName($scope.recordDefinitionName)
                                .get(100, 0, {
                                    propertySelection: "7," + $scope.fieldId,
                                    queryExpression: expression
                                })
                                .then(
                                    function (allRecords) {
                                        $scope.myData = allRecords.data;
                                        $scope.cnt.push(Object.keys($scope.myData).length);
                                    });
                        }


                        $scope.load = function () {
                            var svg = d3.select('#' + $scope.id).append("svg")
                                .attr("width", 960)
                                .attr("height", $scope.paddingHeight)
                                .append("g");

                            svg.append("g")
                                .attr("class", "slices");
                            svg.append("g")
                                .attr("class", "labels");
                            svg.append("g")
                                .attr("class", "lines");
                            var width = $scope.width;
                            var height = $scope.Height;
                            var radius = Math.min(width, height) / 2;
                            var legendRectSize = 9;
                            var legendSpacing = 5;
                            var color = d3.scale.ordinal()
                                .range([$scope.color1, $scope.color2, $scope.color3, $scope.color4]);
                            console.log("data:")
                            console.log($scope.cnt[3]);
                            var data = [
                                { label: $scope.name1, value: $scope.cnt[0] },
                                { label: $scope.name2, value: $scope.cnt[1] ? $scope.cnt[1] : 0 },
                                { label: $scope.name3, value: $scope.cnt[2] ? $scope.cnt[2] : 0 },
                                { label: $scope.name4, value: $scope.cnt[3] ? $scope.cnt[3] : 0 }];

                            var pie = d3.pie().sort(null).value(function (d) { return d.value });
                            var arc = d3.arc().innerRadius(radius * 0.8).outerRadius(radius * 0.5);

                            var outerArc = d3.arc()
                                .outerRadius(radius * 0.9)
                                .innerRadius(radius * 0.9);

                            svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

                            svg.selectAll('path')
                                .data(pie(data))
                                .enter()
                                .append('path')
                                .attr('d', arc)
                                .attr('fill', function (d, i) { return color(i) })
                                .attr("stroke", "white")
                                .style("stroke-width", "3px")
                                .transition().delay(function (d, i) { return i * 500; }).duration(500)
                                .attrTween('d', function (d) {
                                    var i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
                                    return function (t) {
                                        d.endAngle = i(t);
                                        return arc(d);
                                    }
                                });

                            svg.append('g').classed('labels', true);
                            svg.append('g').classed('lines', true);

                            var polyline = svg.select('.lines')
                                .selectAll('polyline')
                                .data(pie(data))
                                .enter().append('polyline')
                                .attr('points', function (d) {
                                    var pos = outerArc.centroid(d);
                                    pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
                                    return d.value == 0 ? "" : [arc.centroid(d), outerArc.centroid(d), pos] //if data value is 0 return blank else return line position
                                });

                            var legend = svg.selectAll('.legend')
                                .data(color.domain())
                                .enter()
                                .append('g')
                                .attr('class', 'legend')
                                .attr('transform', function (d, i) {
                                    var horz = i * 100 + -100;
                                    var vert = -(height / 2) + 7;
                                    return 'translate(' + horz + ',' + vert + ')';
                                });
                            legend.append('rect')
                                .attr('width', legendRectSize)
                                .attr('height', legendRectSize)
                                .style('fill', color)
                                .style('stroke', color);

                            legend.append('text')
                                .data(pie(data))
                                .attr('x', legendRectSize + legendSpacing)
                                .attr('y', legendRectSize - legendSpacing)
                                .text(function (d) { return d.data.label; });

                            var label = svg.select('.labels').selectAll('text')
                                .data(pie(data))
                                .enter().append('text')
                                .attr('dy', '.35em')
                                .html(function (d) {
                                    return d.data;
                                })
                                //if data = 0 dont show the label
                                .text(function (d) { return d.value == 0 ? "" : d.value; })
                                .attr('transform', function (d) {
                                    var pos = outerArc.centroid(d);
                                    pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
                                    return 'translate(' + pos + ')';
                                })
                                .style('text-anchor', function (d) {
                                    return (midAngle(d)) < Math.PI ? 'start' : 'end';
                                });

                            var sum = data.reduce(function (prev, cur) {
                                return prev + cur.value;
                            }, 0);

                            svg.append('text')
                                .attr('class', 'toolCircle')
                                .attr('dy', -5) // hard-coded. can adjust this to adjust text vertical alignment in tooltip
                                .html(sum) // add text to the circle.
                                .style('font-size', '1.1em')
                                .style('text-anchor', 'middle');
                            function midAngle(d) { return d.startAngle + (d.endAngle - d.startAngle) / 2; }
                        }

                        init();

                    }
                };
            });
})();