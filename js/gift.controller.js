(function() {
    'use strict';

    angular
        .module('app')
        .controller('GiftController', GiftController);

    GiftController.$inject = ['$scope', '$rootScope'];
    function GiftController($scope, $rootScope) {
        $rootScope.subTitle = 'Our wedding gift list';
        $rootScope.showNavBar = true;
    }
})();