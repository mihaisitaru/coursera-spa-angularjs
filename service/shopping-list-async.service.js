(function () {

  ShoppingListAsyncService.$inject = ['$q', 'toastr','WeightLossFilterService'];
  function ShoppingListAsyncService($q, toastr, WeightLossFilterService) {

    var vm = this,
        items = [];

    vm.addItem = _addItem;
    vm.getItems = _getItems;
    vm.deleteItem = _deleteItem;

    function _addItem(name, quantity) {
      if (name && quantity) {
        var namePromise = WeightLossFilterService.checkName(name),
            quantityPromise = WeightLossFilterService.checkQuantity(quantity);

        $q.all([namePromise, quantityPromise])
          .then(function (response) {
            var item = {
              name: name,
              quantity: quantity
            };

            items.push(item);
            toastr.success('Were added in the Shopping List with a Promise!',
                            quantity + ' boxes of ' + name);
          })
          .catch(function (errorResponse) {
            toastr.error(errorResponse.message, 'Error');
          });
      } else {
        toastr.error('Please provide the name and quantity!', 'No empty items!');
      }
    }

    function _getItems() {
      return items;
    }

    function _deleteItem(itemIndex, name, quantity) {
      items.splice(itemIndex, 1);
      toastr.warning('Were deleted from Shopping List with a Promise!',
                      quantity + ' boxes of ' + name);
    }
  }

  angular
        .module('CourseraSPA')
        .service('ShoppingListAsyncService', ShoppingListAsyncService);
})();
