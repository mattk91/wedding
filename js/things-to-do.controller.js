(function() {
    'use strict';

    angular
        .module('app')
        .controller('ThingsToDoController', ThingsToDoController);

    ThingsToDoController.$inject = ['$scope', '$rootScope'];
    function ThingsToDoController($scope, $rootScope) {
        $rootScope.subTitle = 'Things to do in Southampton';
        $rootScope.showNavBar = true;
    }
})();