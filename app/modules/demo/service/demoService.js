'use strict';

/**
 * @ngdoc service
 * @name e2eProtactorPresentation.demo.services:demoService
 * @description
 * # demoService
 */
angular.module('demo')
  .service('demoService', [ '$q', function ($q) {

    var _this = this,
        _fixtures = [
          { id: 1, code: 'fix-a', description: 'Oferece a possibilidade de um html mais limpo' },
          { id: 2, code: 'fix-b', description: 'Busca pelos elementos do Angular' },
          { id: 3, code: 'fix-c', description: 'Sem Sleeps e Waits' },
          { id: 4, code: 'fix-d', description: 'Trabalha com Promises' }
        ];

    var _protactorFixtures = function(){

      var defer = $q.defer();

      setTimeout(function(){
        defer.resolve(_fixtures);
      }, 100);

      return defer.promise;
    };

    var _addFixture = function(newFixture){

      var defer = $q.defer();

      setTimeout(function(){
        newFixture.id = _fixtures.length+1;
        _fixtures.push(newFixture);
        defer.resolve(_fixtures);
      }, 100);

      return defer.promise;
    };

    var _removeFixture = function(fixtureId){

      var defer = $q.defer();

      setTimeout(function(){

        var fixtureIds = _fixtures.map(function(x){ return x.id; });
        if (~fixtureIds.indexOf(fixtureId)) {
          _fixtures.splice(fixtureIds.indexOf(fixtureId), 1);
        }

        defer.resolve(_fixtures);
      }, 100);

      return defer.promise;
    };

    return {
      protactorFixtures: _protactorFixtures,
      addFixture: _addFixture,
      removeFixture: _removeFixture
    };

  }]);
