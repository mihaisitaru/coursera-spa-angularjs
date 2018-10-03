(function () {
  'use strict';

  function ListItemDescription() {
    var ddo = {
      restrict: 'E',
      template: '{{ item.quantity }} of {{ item.name }}'
    };

    return ddo;
  }

  angular
        .module('CourseraSPA')
        .directive('listItemDescription', ListItemDescription);
})();
