(function () {
  'use strict';

  function AppController () {

    var vm = this;
    
    vm.name = 'Mihai';
    vm.sayHello = function () {
      return 'Hello man!';
    }

  }

  angular
        .module('CourseraSPA')
        .controller('AppController', AppController);

})();
