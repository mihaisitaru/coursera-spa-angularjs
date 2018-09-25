(function () {
  'use strict';

  ToBuyController.$inject = ['ShoppingListCheckOffService', 'toastr'];
  function ToBuyController(ShoppingListCheckOffService, toastr) {
    var vm = this;

    vm.toBuy = ShoppingListCheckOffService.getToBuyList();
    vm.addToBought = _addToBought;

    function _addToBought(itemIndex, item) {
      ShoppingListCheckOffService.addToBought(itemIndex, item);
      ShoppingListCheckOffService.deleteToBuy(itemIndex, item);
      toastr.success('Bought ' + item.quantity + ' bottles of ' + item.name + '!');
    }
  }

  angular
        .module('ShoppingListCheckOff')
        .controller('ToBuyController', ToBuyController);
})();
