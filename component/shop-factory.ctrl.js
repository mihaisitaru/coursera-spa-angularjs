(function () {
  'use strict';

  // LIST #1 - controller
  ShoppingListController1.$inject = ['ShoppingListFactory', 'toastr'];
  function ShoppingListController1(ShoppingListFactory, toastr) {
    var vm = this;

    // Use factory to create new shopping list service
    var shoppingList = ShoppingListFactory();

    vm.items = shoppingList.getItems();

    vm.itemName = "";
    vm.itemQuantity = "";
    vm.addItem = _addItem;
    vm.removeItem = _removeItem;

    function _addItem() {
      if (vm.itemName && vm.itemQuantity) {
        shoppingList.addItem(vm.itemName, vm.itemQuantity);
        toastr.success(vm.itemName, 'Item added in Shopping List #1!');
        vm.itemName = "";
        vm.itemQuantity = "";
      } else {
        toastr.error('Please provide the name and quantity!', 'No empty items!');
      }
    }

    function _removeItem(itemIndex, item) {
      shoppingList.removeItem(itemIndex);
      toastr.warning(item, 'Item deleted from Shopping List #1!');
    }
  }

  angular
        .module('CourseraSPA')
        .controller('ShoppingListController1', ShoppingListController1);
})();
