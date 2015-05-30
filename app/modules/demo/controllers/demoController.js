'use strict';

/**
 * @ngdoc function
 * @name e2eProtactorPresentation.demo.controller:demoController
 * @description
 * # demoController
 */
angular.module('demo')
  .controller('demoController',
              [ '$rootScope',
                '$scope',
                '$location',
                'demoService',
              function ($rootScope,
                        $scope,
                        $location,
                        demoService) {

    demoService.protactorFixtures()
    .then(function(fixtures){
      $scope.fixtures = fixtures;
    });

    $scope.addNewFixture = function(){

      demoService.addFixture({ description: $scope.newFixture })
      .then(function(){
        return demoService.protactorFixtures();
      })
      .then(function(fixtures){
        $scope.fixtures = fixtures;
      });
    };

    $scope.removeFixture = function(fixtureToRemove){

      demoService.removeFixture(fixtureToRemove)
      .then(function(){
        return demoService.protactorFixtures();
      })
      .then(function(fixtures){
        $scope.fixtures = fixtures;
      });
    };

  }]);
