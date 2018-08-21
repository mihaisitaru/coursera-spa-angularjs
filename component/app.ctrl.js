(function () {
  'use strict';

  function AppController ($scope) {
    $scope.name = 'Mihai';
    $scope.sayHello = function () {
      return 'Hello man!';
    }

  }

  angular
        .module('CourseraSPA')
        .controller('AppController', AppController);

})();
