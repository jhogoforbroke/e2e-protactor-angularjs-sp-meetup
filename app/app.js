'use strict';

/**
 * @ngdoc overview
 * @name e2eProtactorPresentation
 * @description
 *
 * Main module of the application.
 */
angular
  .module('e2eProtactorPresentation', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngLocale',
    'ngTouch',
    'presentation',
    'demo'
  ])
  .config(['$locationProvider',
          '$routeProvider',
          '$resourceProvider',
          function ($locationProvider,
                    $routeProvider,
                    $resourceProvider) {

    $routeProvider
      .otherwise({
        redirectTo: '/presentation/ptbr'
      });

    $resourceProvider.defaults.stripTrailingSlashes = false;
    $locationProvider.html5Mode(true).hashPrefix('!');

  }]);
