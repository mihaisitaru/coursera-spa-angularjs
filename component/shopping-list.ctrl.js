(function () {
  'use strict';

  ShoppingListController.$inject = ['toastr'];
  function ShoppingListController(toastr) {

    var vm = this;

    vm.newItemName = '';
    vm.newItemQuantity = '';
    vm.addToList = _addToList;
    vm.shoppingList1 = ["Milk", "Donuts", "Cookies", "Chocolate",
                        "Peanut Butter", "Pepto Bismol",
                        "Pepto Bismol (Chocolate flavor)",
                        "Pepto Bismol (Cookie flavor)"];

    vm.shoppingList2 = [
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Donuts",
        quantity: "200"
      },
      {
        name: "Cookies",
        quantity: "300"
      },
      {
        name: "Chocolate",
        quantity: "5"
      }
    ];

    function _addToList() {

      if (vm.newItemName && vm.newItemQuantity) {
        var newItem = {
          name: vm.newItemName,
          quantity: vm.newItemQuantity
        };

        vm.shoppingList2.push(newItem);
        vm.newItemName = '';
        vm.newItemQuantity = '';
      } else {
        toastr.error('Please provide the name and quantity!', 'No empty items!');
      }
    }

  }

  angular
        .module('CourseraSPA')
        .controller('ShoppingListController', ShoppingListController);
})();
