(function () {
  'use strict';

  ShopAsyncController.$inject = ['ShoppingListAsyncService'];
  function ShopAsyncController(ShoppingListAsyncService) {
    var vm = this;

    vm.itemName = null;
    vm.itemQuantity = null;
    vm.items = ShoppingListAsyncService.getItems();

    vm.addItem = _addItem;
    vm.removeItem = _removeItem;

    function _addItem() {
          ShoppingListAsyncService.addItem(vm.itemName, vm.itemQuantity);
          vm.itemName = null;
          vm.itemQuantity = null;
    }

    function _removeItem(itemIndex, item, quantity) {
      ShoppingListAsyncService.deleteItem(itemIndex, item, quantity);
    }

  }

  angular
        .module('CourseraSPA')
        .controller('ShopAsyncController', ShopAsyncController);
})();
