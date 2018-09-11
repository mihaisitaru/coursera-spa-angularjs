(function () {
  'use strict';

  ShoppingListAddController.$inject = ['shoppingListService', 'toastr'];
  function ShoppingListAddController(shoppingListService, toastr) {

    var vm = this;

    vm.itemName = '';
    vm.itemQuantity = '';

    vm.addItem = _addItem;

    function _addItem () {
      shoppingListService.addItem(vm.itemName, vm.itemQuantity);
      toastr.success(vm.itemName, 'Item added!');
      vm.itemName = '';
      vm.itemQuantity = '';
    }
}

  angular
        .module('CourseraSPA')
        .controller('ShoppingListAddController', ShoppingListAddController);
})();
