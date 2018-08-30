(function () {
  'use strict';

function FilteredArrayController() {

  var vm = this;
  var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var filteredNumberArray = numberArray.filter(oddNumbers);
  var shoppingList = [
    "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter",
    "Pepto Bismol", "Pepto Bismol (Chocolate flavor)",
    "Pepto Bismol (Cookie flavor)"
  ];
  var searchValue = 'Bismol';
  var searchShoppingList = shoppingList.filter(containsFilter);

  vm.shoppingList = shoppingList;
  vm.searchValue = searchValue;
  function oddNumbers(value) {
      return value % 2;
  }

  function containsFilter(value) {
    return value.indexOf(searchValue) !== -1;
  }

  console.log('Number Array: ', numberArray);
  console.log('Filtered Number Array: ', filteredNumberArray);
  console.log('Shopping List', shoppingList);
  console.log('Search shopping list', searchShoppingList);
}

  angular
        .module('CourseraSPA')
        .controller('FilteredArrayController', FilteredArrayController)
})();
