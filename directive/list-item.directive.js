(function () {
  'use strict';

  function ListItemDirective() {
    var ddo = {
      restrict: 'AE',
      templateUrl: '/directive/list-item.directive.html'
    };

    return ddo;
  }

  angular
        .module('CourseraSPA')
        .directive('listItem', ListItemDirective);
})();
