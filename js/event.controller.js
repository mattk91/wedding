(function() {
    'use strict';

    angular
        .module('app')
        .controller('EventController', EventController);

    EventController.$inject = ['$scope', '$rootScope'];
    function EventController($scope, $rootScope) {
        $rootScope.subTitle = 'The main event';
        $rootScope.showNavBar = true;
    }
})();