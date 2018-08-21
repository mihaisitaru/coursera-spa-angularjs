(function () {
  'use strict';

  function NameCalculatorController () {

    var vm = this;

    vm.fullName = '';
    vm.totalValue = 0;

    vm.displayNumeric = function () {
      var totalNameValue = calculateNumeric(vm.fullName);
      vm.totalValue = totalNameValue;
    };

    function calculateNumeric(str) {
      var stringValue = 0;
      for (var i = 0; i < str.length; i++) {
        stringValue += str.charCodeAt(i);
      }

      return stringValue;
    }
  }

  angular
        .module('CourseraSPA')
        .controller('NameCalculatorController', NameCalculatorController);
})();
