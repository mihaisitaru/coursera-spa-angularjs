(function () {
  'use strict';

  //inject $scope so the code works even if minified/uglyfied
  LunchCheckController.$inject = ['$scope'];

  //create controller function
  function LunchCheckController($scope) {

    //declare and assign initial values for scope variables
    $scope.title = 'Lunch Checker';
    $scope.emptyDish = false;
    $scope.emptyDishMsg = '';
    $scope.errorMsg = '';
    $scope.listLength = 0;
    $scope.lunchMenu = null;
    $scope.warningColor = null;
    $scope.placeholder = 'List comma separated dishes you usually have for lunch';

    //declare and assign values for scope variables that hold methods
    $scope.checkLength = _checkLength;
    $scope.checkEmptyDish = _checkEmptyDish;

    //create checkLunch function
    $scope.checkLunch = function () {
      //check if the input field has values, a.k.a. if is truthy
      if ($scope.lunchMenu) {
        //transform the string value into an array
        let lunch = $scope.lunchMenu.split(',');
        $scope.listLength = lunch.length;
        //call _checkLength method passing the lunch.length
        _checkLength($scope.listLength);
      } else {
        /*
          display the 'Please enter data first!' message
          if the input is empty while clicking the 'Chef If Too Much' button
        */
        $scope.emptyDish = false;
        $scope.warningColor = 'red';
        $scope.errorMsg = 'Please enter data first!';
      }
    }

    function _checkLength(length) {
      //call method to check for empty dishes
      _checkEmptyDish($scope.emptyDish);

      //check if there are 3 or less dishes
      if (length <= 3) {
        $scope.warningColor = 'green';
        $scope.errorMsg = 'Enjoy!';
      } else if (length > 3) {
        $scope.warningColor = 'orange';
        $scope.errorMsg = 'Too much!';
      }
    }

    //create method to check for empty dishes
    function _checkEmptyDish(emptyDish) {
      for (var i = 0; i < $scope.listLength; i++) {
              $scope.emptyDish = $scope.lunchMenu.split(',')[i] === '' ||
                                 $scope.lunchMenu.split(',')[i] === ' ';
              $scope.emptyDishMsg = 'No empty dishes allowed!';
      }
    }
    //reset method for the reset button
    $scope.reset = function() {
      $scope.lunchMenu = null;
      $scope.emptyDish = false;
      $scope.errorMsg = '';
      $scope.warningColor = '';
      $scope.emptyDishMsg = '';
    };
  }

  //register controler on the LunchCheck module
  angular
        .module('LunchCheck')
        .controller('LunchCheckController', LunchCheckController);
})();
