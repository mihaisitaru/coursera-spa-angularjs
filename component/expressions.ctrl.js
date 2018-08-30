(function () {
  'use strict';

function ExpressionsController() {

  var vm = this;

  vm.names = 'Mihai Sitaru';
  vm.displayMessage = function () {
    return " is sleepy";
  };
}

angular
      .module('CourseraSPA')
      .controller('ExpressionsController', ExpressionsController);
})();
