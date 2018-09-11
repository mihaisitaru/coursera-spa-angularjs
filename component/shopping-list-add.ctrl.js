(function () {
  'use strict';

  ShoppingListAddController.$inject = ['shoppingListService', 'toastr'];
  function ShoppingListAddController(shoppingListService, toastr) {

    var vm = this;

    vm.itemName = '';
    vm.itemQuantity = '';

    vm.addItem = _addItem;

    function _addItem () {
      if (vm.itemName && vm.itemQuantity) {
        shoppingListService.addItem(vm.itemName, vm.itemQuantity);
        toastr.success(vm.itemName, 'Item added!');
        vm.itemName = '';
        vm.itemQuantity = '';
      } else {
        toastr.error('Please provide the name and quantity!', 'No empty items!');
      }
    }
}

  angular
        .module('CourseraSPA')
        .controller('ShoppingListAddController', ShoppingListAddController);
})();
