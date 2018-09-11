(function () {
  'use strict';

  AppConfig.$inject = ['ShoppingListSProvider'];
  function AppConfig(ShoppingListSProvider) {
    ShoppingListSProvider.defaults.maxItems = 2;
  }

  angular
        .module('CourseraSPA')
        .config(AppConfig);
})();
