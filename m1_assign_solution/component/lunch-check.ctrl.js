(function () {
  'use strict';

  //create controller function
  function LunchCheckController() {

    var vm = this;

    //declare and assign initial values for variables
    vm.title = 'Lunch Checker';
    vm.emptyDish = false;
    vm.emptyDishMsg = '';
    vm.errorMsg = '';
    vm.listLength = 0;
    vm.lunchMenu = null;
    vm.warningColor = null;
    vm.placeholder = 'List comma separated dishes you usually have for lunch';

    //declare and assign values for variables that hold methods
    vm.checkLength = _checkLength;
    vm.checkEmptyDish = _checkEmptyDish;

    //create checkLunch function
    vm.checkLunch = function () {
      //check if the input field has values, a.k.a. if is truthy
      if (vm.lunchMenu) {
        //transform the string value into an array
        let lunch = vm.lunchMenu.split(',');
        vm.listLength = lunch.length;
        //call _checkLength method passing the lunch.length
        _checkLength(vm.listLength);
      } else {
        /*
          display the 'Please enter data first!' message
          if the input is empty while clicking the 'Chef If Too Much' button
        */
        vm.emptyDish = false;
        vm.warningColor = 'red';
        vm.errorMsg = 'Please enter data first!';
      }
    }

    function _checkLength(length) {
      //call method to check for empty dishes
      _checkEmptyDish(vm.emptyDish);

      //check if there are 3 or less dishes
      if (length <= 3) {
        vm.warningColor = 'green';
        vm.errorMsg = 'Enjoy!';
      } else if (length > 3) {
        vm.warningColor = 'orange';
        vm.errorMsg = 'Too much!';
      }
    }

    //create method to check for empty dishes
    function _checkEmptyDish(emptyDish) {
      for (var i = 0; i < vm.listLength; i++) {
              vm.emptyDish = vm.lunchMenu.split(',')[i] === '' ||
                                 vm.lunchMenu.split(',')[i] === ' ';
              vm.emptyDishMsg = 'No empty dishes allowed!';
      }
    }
    //reset method for the reset button
    vm.reset = function() {
      vm.lunchMenu = null;
      vm.emptyDish = false;
      vm.errorMsg = '';
      vm.warningColor = '';
      vm.emptyDishMsg = '';
    };
  }

  //register controler on the LunchCheck module
  angular
        .module('LunchCheck')
        .controller('LunchCheckController', LunchCheckController);
})();
