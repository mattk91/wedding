(function() {
    'use strict';

    angular
        .module('app')
        .controller('RsvpController', RsvpController);

    RsvpController.$inject = ['$scope', '$http', '$httpParamSerializerJQLike'];
    function RsvpController($scope, $http, $httpParamSerializerJQLike) {
        var mailerUrl = 'mail/submit.php';
        var successContainsStr = 'Thanks!  We\'ve received your information';
        $scope.email = 'mncwedding2016@gmail.com';
        $scope.submitted = false;
        $scope.processing = false;
        $scope.formData = {
            recipients : $scope.email,
            subject: "Online RSVP"
        };

        $scope.submitRsvp = function() {
            process();
            $http.post(
                mailerUrl,
                $httpParamSerializerJQLike($scope.formData),
                {
                    headers : {
                        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
            }).success(function(data) {
                isSuccess(data) ? success() : failure();
            }).error(failure);
        };

        function isSuccess(data) {
            return data.indexOf(successContainsStr) > 0;
        }

        function success() {
            $scope.submitted = true;
            $scope.processing = false;
            $scope.success = true;
        }

        function failure() {
            $scope.submitted = true;
            $scope.processing = false;
            $scope.success = false;
        }

        function process() {
            $scope.processing = true;
        }
    }
})();