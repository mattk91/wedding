(function() {
    'use strict';

    angular
        .module('app')
        .controller('RsvpController', RsvpController);

    RsvpController.$inject = ['$scope', '$rootScope'];
    function RsvpController($scope, $rootScope) {
        $rootScope.subTitle = 'RSVP';
        $rootScope.showNavBar = true;
    }
})();