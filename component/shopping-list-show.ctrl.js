(function () {
  'use strict';

  ShoppingListShowController.$inject = ['shoppingListService'];
  function ShoppingListShowController(shoppingListService) {

    var vm = this;

    vm.items = shoppingListService.getItems();
    vm.deleteItem = _deleteItem;
    vm.emptyShoppingList = _emptyShoppingList;

    function _deleteItem(itemIndex) {
      shoppingListService.deleteItem(itemIndex);
    }

    function _emptyShoppingList() {
      shoppingListService.emptyShoppingList();
    }
  }

  angular
        .module('CourseraSPA')
        .controller('ShoppingListShowController', ShoppingListShowController);
})();
