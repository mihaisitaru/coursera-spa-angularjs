(function () {
  'use strict';

  // LIST #2 - controller
  ShoppingListController2.$inject = ['ShoppingListFactory', 'toastr'];
  function ShoppingListController2(ShoppingListFactory, toastr) {
    var vm = this,
        maxItems = 3,
        shoppingList = ShoppingListFactory(maxItems);

    vm.items = shoppingList.getItems();

    vm.itemName = "";
    vm.itemQuantity = "";
    vm.addItem = _addItem;
    vm.removeItem = _removeItem;

    function _addItem() {
      try {
        if (vm.itemName && vm.itemQuantity) {
          shoppingList.addItem(vm.itemName, vm.itemQuantity);
          toastr.success(vm.itemName, 'Item added in Shopping List #2!');
          vm.itemName = "";
          vm.itemQuantity = "";
        } else {
          toastr.error('Please provide the name and quantity!', 'No empty items!');
        }
      } catch (error) {
        toastr.error(error.message, 'Error');
      }
    }

    function _removeItem(itemIndex, item) {
      shoppingList.removeItem(itemIndex);
      toastr.warning(item, 'Item deleted from Shopping List #2!');
    }
  }

  angular
        .module('CourseraSPA')
        .controller('ShoppingListController2', ShoppingListController2);
})();
