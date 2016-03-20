(function() {
    'use strict';

    angular
        .module('app')
        .controller('AccommodationController', AccommodationController);

    AccommodationController.$inject = ['$scope', '$rootScope'];
    function AccommodationController($scope, $rootScope) {
        $rootScope.subTitle = 'Places to stay in Southampton';
        $rootScope.showNavBar = true;
    }
})();