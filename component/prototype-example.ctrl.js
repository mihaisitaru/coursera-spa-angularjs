(function () {
  'use strict';

  function PrototypeExampleController() {

    var vm = this;
    var parent = {
          value: 'parentValue',
          obj: {
            objValue: 'parentObjValue'
          },
          walk: function () {
            console.log('walking!');
          }
        },
        child = Object.create(parent);

    vm.showLog = false;
    console.log('CHILD - child.value: ', child.value);
    console.log('CHILD - child.obj.objValue: ', child.obj.objValue);
    console.log('PARENT - parent.value: ', parent.value);
    console.log('PARENT - parent.obj.objValue: ',parent.obj.objValue);
    console.log('PARENT: ', parent);
    console.log('CHILD: ', child);
    parent.speak = function () {
      console.log('Say your name!');
    };
    console.log('CHILD - child.walk: ', child.walk());
    console.log('CHILD - child.speak: ', child.speak());
    console.log('CHILD: ', child);
    child.value = 'childValue';
    child.obj.objValue = 'childObjValue';
    console.log('CHILD - child.value: ', child.value);
    console.log('CHILD - child.obj.objValue: ', child.obj.objValue);
    console.log('PARENT - parent.value: ', parent.value);
    console.log('PARENT - parent.obj.objValue: ',parent.obj.objValue);
    console.log('PARENT: ', parent);
    console.log('CHILD: ', child);
    console.log('child.obj === parent.obj ?' , child.obj === parent.obj);
    var obj = {
      objValue: 'ChildObjValue'
    }

    child.obj = obj;
    console.log('CHILD - child.value: ', child.value);
    console.log('CHILD - child.obj.objValue: ', child.obj.objValue);
    console.log('PARENT - parent.value: ', parent.value);
    console.log('PARENT - parent.obj.objValue: ',parent.obj.objValue);
    console.log('PARENT: ', parent);
    console.log('CHILD: ', child);

    console.log('child.obj === parent.obj ?' , child.obj === parent.obj);

    var grandChild = Object.create(child);
    console.log('Grandchild: ', grandChild);
    grandChild.walk();

    function Dog(name) {
      vm.name = name;
      console.log("'vm' is: ", vm);
    }

    var myDog = new Dog('Max');
    console.log('myDog: ', myDog);

    //Not being used as a function contructor
    Dog('Max2');
  }

  angular
        .module('CourseraSPA')
        .controller('PrototypeExampleController', PrototypeExampleController);
})();
