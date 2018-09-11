(function () {
  'use strict';

  ShopProviderController.$inject = ['ShoppingListS', 'toastr'];
  function ShopProviderController(ShoppingListS, toastr) {
    var vm = this;

    vm.items = ShoppingListS.getItems();
    vm.itemName = "";
    vm.itemQuantity = "";

    vm.addItem = _addItem;
    vm.removeItem = _removeItem;

    function _addItem() {
      try {
        if (vm.itemName && vm.itemQuantity) {
          ShoppingListS.addItem(vm.itemName, vm.itemQuantity);
          toastr.success(vm.itemName, 'Item added in Shopping List #1!');
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
      ShoppingListS.removeItem(itemIndex);
      toastr.warning(item, 'Item deleted from Shopping List #1!');
    }
  }

  angular
        .module('CourseraSPA')
        .controller('ShopProviderController', ShopProviderController);
})();
