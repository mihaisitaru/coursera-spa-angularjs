(function () {
  'use strict';

  CounterController.$inject = ['$scope', '$timeout'];

  function CounterController($scope, $timeout) {
    var vm = this;
    $scope.onceCounter = 0;
    $scope.counter = 0;
    $scope.name = 'Mihai';

    vm.showNumberOfWatchers = _showNumberOfWatchers;
    $scope.countOnce = _countOnce;
    $scope.upCounter = _upCounter;

    function _showNumberOfWatchers() {
      console.log('# of Watchers from $$watchersCount', $scope.$$watchersCount);
      console.warn('Never interact directly with $$watchersCount!');
    }

    function _countOnce() {
      $scope.onceCounter = 1;
    }

    // use $digest to trigger the digest cycle on non angular events, like setTimeout
    // $digest will catch the changes and the exceptions of the code

    // function _upCounter() {
    //   setTimeout(function () {
    //     $scope.counter++;
    //     $scope.$digest();
    //   }, 2000);
    // }

    // wrap the code in $apply so angular can automatically call the $digest cycle on non angular events
    // $apply calls $digest which will catch the changes and the exceptions of the code

    // function _upCounter() {
    //   setTimeout(function () {
    //     $scope.$apply(function () {
    //       $scope.counter++;
    //     });
    //   }, 2000);
    // }

    //use directly the $timeout service from angular instead of the setTimeout

    function _upCounter() {
      $timeout(function () {
          $scope.counter++;
      }, 2000);
    }

    $scope.$watch(function () {
      console.log('digest loop fired')
    });

    // $scope.$watch('onceCounter', function(newValue, oldValue) {
    //   console.log('onceCounter old value: ', oldValue);
    //   console.log('onceCounter new value: ', newValue);
    // });
    //
    // $scope.$watch('counter', function(newValue, oldValue) {
    //   console.log('counter old value: ', oldValue);
    //   console.log('counter new value: ', newValue);
    // });

  }

  angular
         .module('CourseraSPA')
         .controller('CounterController', CounterController);
})();
