(function() {
    'use strict';

    angular
        .module('app')
        .controller('RsvpController', RsvpController);

    RsvpController.$inject = ['$scope', '$rootScope', '$http'];
    function RsvpController($scope, $rootScope, $http) {
        var mailerUrl = 'mail/submit.php';
        $scope.submitRsvp = function() {
            $http.post(mailerUrl, RsvpForm, {headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            });
        }
    }
})();