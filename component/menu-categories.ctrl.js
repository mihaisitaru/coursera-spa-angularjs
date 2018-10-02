(function () {
  'use strict';

  MenuCategoriesController.$inject = ['$log', 'MenuCategoriesService', 'toastr'];
  function MenuCategoriesController($log, MenuCategoriesService, toastr) {
    var vm = this,
        promise = MenuCategoriesService.getMenuCategories();

    vm.logMenuItems = _logMenuItems;

    promise.then(function (response) {
      vm.categories = response.data;
      toastr.success('The data was retrieved!', 'Data found:')
    })
    .catch(function (error) {
      $log.log(error);
      toastr.error('Something wend wrong, check console!', 'Error message:');
    });

    function _logMenuItems(shortName) {
      var promise = MenuCategoriesService.getMenuForCategory(shortName);

      promise.then(function (response) {
        toastr.success('Check console for data!', 'Success');
        $log.log(response.data);
      })
      .catch(function (error) {
        $log.log(error);
        toastr.error('Something is not right, check console!', 'Error');
      });
    }

  }

  angular
        .module('CourseraSPA')
        .controller('MenuCategoriesController', MenuCategoriesController);
})();
