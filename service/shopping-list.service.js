(function () {

  function shoppingListService() {

    var vm = this,
        items = [
          {name:'Fontina Cheese', quantity: '450g'},
          {name:'Italian Salamy', quantity: '550g'},
          {name:'Pomodoro Sauce', quantity: '750ml'},
        ];

    vm.addItem = _addItem;
    vm.getItems = _getItems;
    vm.deleteItem = _deleteItem;
    vm.emptyShoppingList = _emptyShoppingList;

    function _addItem(itemName, quantity) {
      if (itemName && quantity) {
        var item = {
          name: itemName,
          quantity: quantity
        };

        items.push(item);
      }
    }

    function _getItems() {
      return items;
    }

    function _deleteItem(itemIndex) {
      items.splice(itemIndex, 1);
    }

    function _emptyShoppingList() {
      var i = items.length;
      while (i--) {
        items.splice(i, 1);
      }
    }
  }

  angular
        .module('CourseraSPA')
        .service('shoppingListService', shoppingListService);
})();
