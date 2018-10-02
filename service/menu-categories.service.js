(function () {
  'use strict';

  MenuCategoriesService.$inject = ['$http', 'ApiBasePath'];
  function MenuCategoriesService($http, ApiBasePath) {
    var vm = this;

    vm.getMenuCategories = _getMenuCategories;
    vm.getMenuForCategory = _getMenuCategories;

    function _getMenuCategories() {
      var response = $http({
        method: 'GET',
        url: (ApiBasePath + '/categories.json')
      });

      return response;
    }

    function _getMenuForCategory (shortName) {
      var response = $http({
        method: 'GET',
        url: (ApiBasePath + '/menu_items.json'),
        params: {
          category: shortName
        }
      });

      return response;
    }

  }

  angular
        .module('CourseraSPA')
        .service('MenuCategoriesService', MenuCategoriesService);
})();
