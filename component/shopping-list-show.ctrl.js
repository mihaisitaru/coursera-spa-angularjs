(function () {
  'use strict';

  ShoppingListShowController.$inject = ['shoppingListService', 'toastr'];
  function ShoppingListShowController(shoppingListService, toastr) {

    var vm = this;

    vm.items = shoppingListService.getItems();
    vm.deleteItem = _deleteItem;
    vm.emptyShoppingList = _emptyShoppingList;

    function _deleteItem(itemIndex, item) {
      shoppingListService.deleteItem(itemIndex);
      toastr.info('Item ' + item + ' deleted!');
    }

    function _emptyShoppingList() {
      shoppingListService.emptyShoppingList();
      toastr.success('Now there are no items in the Shopping List!');
    }
  }

  angular
        .module('CourseraSPA')
        .controller('ShoppingListShowController', ShoppingListShowController);
})();
