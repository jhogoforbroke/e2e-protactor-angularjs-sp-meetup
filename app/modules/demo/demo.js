'use strict';

angular.module('demo', ['ngRoute','ngAnimate']);

angular.module('demo')
.config([ '$routeProvider', '$resourceProvider', function($routeProvider, $resourceProvider) {

    $routeProvider
      .when('/demo', {
        templateUrl: 'modules/demo/views/demo.html',
        controller: 'demoController'
      });

}]);
