(function () {
  'use strict';

FilterController.$inject = ['$filter'];
  function FilterController($filter) {

    var vm = this;

    vm.name = 'MS';
    vm.nameFiltered = $filter('lowercase')(vm.name);
    vm.stateOfBeing = null;
    vm.cookieCost = .50;

    vm.sayMessage = _sayMessage;
    vm.feedMihai = _feedMihai;

    function _sayMessage() {
        var msg = 'Mihai likes to eat healthy snacks!',
            output = $filter('uppercase')(msg);
        return output;
    }

    function _feedMihai() {
      vm.stateOfBeing = 'Mihai is fed';
    }

  }

  angular
         .module('CourseraSPA')
         .controller('FilterController', FilterController);
})();
