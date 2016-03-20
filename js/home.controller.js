(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$rootScope'];
    function HomeController($scope, $rootScope) {
        $rootScope.subTitle = '';
        $rootScope.showNavBar = true;
    }
})();