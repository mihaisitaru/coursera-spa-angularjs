(function () {
  'use strict';

  function ParentExampleController() {

    var parent = this;

    parent.value = 10;
  }

  angular
        .module('CourseraSPA')
        .controller('ParentExampleController', ParentExampleController);
})();
