'use strict';

angular.module('presentation', ['ngRoute','ngAnimate']);

angular.module('presentation')
.config([ '$routeProvider', '$resourceProvider', function($routeProvider, $resourceProvider) {

    $routeProvider
      .when('/presentation/ptbr', {
        templateUrl: 'modules/presentation/ptbr/presentation.html'
      });

}]);
