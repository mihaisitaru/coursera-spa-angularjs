(function () {
  'use strict';

function DiController($scope,
                      $filter,
                      $injector) {

DiController.$inject['$scope', '$filter', '$injector'];

  var vm = this;
  vm.anotherName = "ms";
  $scope.aha = "aha";

  vm.upper = function () {
    var upCase = $filter('uppercase');
    vm.anotherName = upCase(vm.anotherName);
  };

  vm.lower = function () {
    var loCase = $filter('lowercase');
    vm.anotherName = loCase(vm.anotherName);
  }
  console.log('AngularJS realizes what to inject: ', $injector.annotate(DiController));
}

  angular
        .module('CourseraSPA')
        .controller('DiController', DiController);
})();
