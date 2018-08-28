(function () {
  'use strict';

FilterController.$inject = ['$filter', 'lovesFilter'];
  function FilterController($filter, lovesFilter) {

    var vm = this,
        msg = 'Mihai likes to eat healthy snacks!';

    vm.name = 'MS';
    vm.nameFiltered = $filter('lowercase')(vm.name);
    vm.stateOfBeing = null;
    vm.cookieCost = .50;

    vm.sayMessage = _sayMessage;
    vm.sayLovesMessage = _sayLovesMessage;
    vm.feedMihai = _feedMihai;
    vm.action = 'Show price';

    function _sayMessage() {
        var upper = $filter('uppercase')(msg);
        return upper;
    }

    function _sayLovesMessage() {
        var lovesMessage = lovesFilter(msg);
        return lovesMessage;
    }

    function _feedMihai() {
      if (!vm.stateOfBeing) {
        vm.stateOfBeing = 'Mihai is full';
        vm.action = 'Hide price';
      } else {
        vm.stateOfBeing = null;
        vm.action = 'Show price';
      }
    }
  }

  function LovesFilter() {
    return function (input) {
      input = input || '';
      input = input.replace('likes', 'loves');
      return input;
    }
  }

  function TruthFilter() {
    return function (input, target, replace) {
      input = input || '';
      input = input.replace(target, replace);
      return input;
    }
  }

  angular
         .module('CourseraSPA')
         .controller('FilterController', FilterController)
         .filter('loves', LovesFilter)
         .filter('truth', TruthFilter);
})();
