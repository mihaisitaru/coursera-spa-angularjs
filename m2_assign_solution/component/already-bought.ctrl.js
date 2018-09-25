(function () {
  'use strict';

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService', 'toastr'];
  function AlreadyBoughtController(ShoppingListCheckOffService, toastr) {
    var vm = this;

    vm.deleteBought = _deleteBought;

    _activate();

    function _activate() {
      vm.alreadyBought = ShoppingListCheckOffService.getAlreadyBought();
    }

    function _deleteBought(itemIndex, item) {
      ShoppingListCheckOffService.addToBuy(item.name, item.quantity);
      ShoppingListCheckOffService.deleteBought(itemIndex, item);
      toastr.info(item.quantity + ' bottles of ' + item.name + ' not bought yet!');
    }
  }

  angular
        .module('ShoppingListCheckOff')
        .controller('AlreadyBoughtController', AlreadyBoughtController);
})();
