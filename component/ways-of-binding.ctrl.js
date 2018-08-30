(function () {
  'use strict';

  WaysOfBindingController.$inject = ['$scope'];
  function WaysOfBindingController($scope) {

    var vm = this;

    vm.firstName = "Mihai";
    //vm.fullName = "";
    vm.showNumberOfWatchers = _showNumbersOfWatchers;
    vm.setFullName = _setFullName;
    vm.logFirstName = _logFirstName;
    vm.logFullName = _logFullName;

    function _showNumbersOfWatchers() {
      console.log('# of Watchers: ', $scope.$$watchersCount);
    }

    function _setFullName() {
      vm.fullName = vm.firstName + ' ' + 'Sitaru';
    }

    function _logFirstName() {
      console.log("First name is: ", vm.firstName);
    }

    function _logFullName() {
      console.log("Full name is: ", vm.fullName);
    }
  }

  angular
        .module('CourseraSPA')
        .controller('WaysOfBindingController', WaysOfBindingController);
})();
