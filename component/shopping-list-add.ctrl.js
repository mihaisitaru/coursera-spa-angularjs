(function () {
  'use strict';

  ShoppingListAddController.$inject = ['shoppingListService'];
  function ShoppingListAddController(shoppingListService) {

    var vm = this;

  vm.itemName = '';
  vm.itemQuantity = '';

  vm.addItem = _addItem;

  function _addItem () {
    shoppingListService.addItem(vm.itemName, vm.itemQuantity);
    vm.itemName = '';
    vm.itemQuantity = '';
  }
}

  angular
        .module('CourseraSPA')
        .controller('ShoppingListAddController', ShoppingListAddController);
})();
