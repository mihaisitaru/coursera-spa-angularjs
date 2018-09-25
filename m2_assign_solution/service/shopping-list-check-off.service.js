(function () {
  'use strict';

  function ShoppingListCheckOffService() {
    var vm = this,
        bought = [],
        toBuy = [{
          name: 'CocaCola',
          quantity: 10
        },
        {
          name: '7UP',
          quantity: 6
        },
        {
          name: 'Silva bruna',
          quantity: 25
        },
        {
          name: 'Capra Neagra',
          quantity: 30
        },
        {
          name: 'Carlsberg',
          quantity: 50
        },
        {
          name: 'Heineken',
          quantity: 50
        },
        {
          name: 'Tuborg',
          quantity: 20
        },
        {
          name: 'Leffe blonda',
          quantity: 10
        },
        {
          name: 'Guiness beer',
          quantity: 30
        },
        {
          name: 'Stella Artois',
          quantity: 60
        }];

    vm.getToBuyList = _getToBuyList;
    vm.addToBought = _addToBought;
    vm.getAlreadyBought = _getAlreadyBought;
    vm.deleteToBuy = _deleteToBuy;
    vm.deleteBought = _deleteBought;
    vm.addToBuy = _addToBuy;

    function _getToBuyList() {
      return toBuy;
    }

    function _addToBought(itemIndex, item) {
      bought.push(item);
    }

    function _getAlreadyBought() {
      return bought;
    }

    function _deleteToBuy(itemIndex, item) {
      toBuy.splice(itemIndex, 1);
    }

    function _deleteBought(itemIndex, item) {
      bought.splice(itemIndex, 1);
    }

    function _addToBuy(name, quantity) {
      toBuy.push({
        name: name,
        quantity: quantity
      });
    }
  }

  angular
        .module('ShoppingListCheckOff')
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
})();
