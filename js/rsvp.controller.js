(function() {
    'use strict';

    angular
        .module('app')
        .controller('RsvpController', RsvpController);

    RsvpController.$inject = ['$scope', '$rootScope', '$http'];
    function RsvpController($scope, $rootScope, $http) {
        var mailerUrl = 'mail/submit.php';
        $scope.formData = {};

        $scope.submitRsvp = function() {
            $http.post(mailerUrl, $scope.formData, {headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            });
        };

        // todo custom parse response as it always shows a 200 even if there's an error ....
    }
})();