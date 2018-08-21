(function () {
'use strict';

ExpressionsController.$inject = ['$scope'];

function ExpressionsController($scope) {
  $scope.names = 'Mihai Sitaru';
  $scope.displayMessage = function () {
    return " is sleepy";
  };
}

angular
      .module('CourseraSPA')
      .controller('ExpressionsController', ExpressionsController);
})();
