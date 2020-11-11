(function () {
  'use strict';

  angular.module('com.vyom.vyomlib', [
    'ngSanitize',
    'com.bmc.arsys.rx.standardlib.error-handling',
    'com.vyom.vyomlib.view-components.dashboard1',  //Know Me VC
    'com.vyom.vyomlib.view-components.pie',         //Donut Chart VC
    'com.vyom.vyomlib.view-components.test',
    'com.vyom.vyomlib.view-components.chatbot',     //Chat bot icon VC
    'com.vyom.vyomlib.view-components.bar',         // Bar chart vc
    'com.vyom.vyomlib.view-components.gantt',          //gantt chart VC
    'com.vyom.vyomlib.view-components.nvd3-chart'
  ]);
})();
