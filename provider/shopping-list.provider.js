(function () {
  'use strict';

  function ShoppingListS(maxItems) {
    var vm = this;

    // List of shopping items
    var items = [];

    vm.addItem = _addItem;
    vm.removeItem = _removeItem;
    vm.getItems = _getItems;

    function _addItem(itemName, quantity) {
      if ((maxItems === undefined) ||
          (maxItems !== undefined) && (items.length < maxItems)) {
        var item = {
          name: itemName,
          quantity: quantity
        };
        items.push(item);
      }
      else {
        throw new Error("Max items (" + maxItems + ") reached.");
      }
    }

    function _removeItem(itemIndex) {
      items.splice(itemIndex, 1);
    }

    function _getItems() {
      return items;
    }
  }

  function ShoppingListSProvider() {
    var provider = this;

    provider.defaults = {
      maxItems: 10
    };

    provider.$get = function () {
      var shoppingList = new ShoppingListS(provider.defaults.maxItems);
      return shoppingList;
    };
  }

  angular
        .module('CourseraSPA')
        .provider('ShoppingListS', ShoppingListSProvider);
})();
