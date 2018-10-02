(function () {
  'use strict';

  WeightLossFilterService.$inject = ['$q', '$timeout', 'toastr'];
  function WeightLossFilterService($q, $timeout, toastr) {
    var vm = this;

    vm.checkName = _checkName;
    vm.checkQuantity = _checkQuantity;

    function _checkName(name) {
      var deferred = $q.defer(),
          result = {
            message: ""
          };

      $timeout(function () {
        // Check for cookies
        if (name.toLowerCase().indexOf('cookie') === -1) {
          deferred.resolve(result)
        }
        else {
          result.message = 'Stay away from cookies, Mihai!';
          deferred.reject(result);
        }
      }, 3000);

      return deferred.promise;
    }

    function _checkQuantity(quantity) {
      var deferred = $q.defer(),
          result = {
            message: ""
          };

      $timeout(function () {
        // Check for too many boxes
        if (quantity < 6) {
          deferred.resolve(result);
        }
        else {
          result.message = "That's too much, Mihai!";
          deferred.reject(result);
        }
      }, 1000);

      return deferred.promise;
    }
  }

  angular
        .module('CourseraSPA')
        .service('WeightLossFilterService', WeightLossFilterService);
})();
