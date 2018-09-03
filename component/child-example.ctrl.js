(function () {
  'use strict';

  function ChildExampleController($scope) {
    var child = this;

    child.value = 5;
    console.log('ChildExampleController scope: ', $scope);
  }

  angular
        .module('CourseraSPA')
        .controller('ChildExampleController', ChildExampleController);
})();
