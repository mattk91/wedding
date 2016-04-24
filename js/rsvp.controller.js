(function() {
    'use strict';

    angular
        .module('app')
        .controller('RsvpController', RsvpController);

    RsvpController.$inject = ['$scope', '$http', '$httpParamSerializerJQLike'];
    function RsvpController($scope, $http, $httpParamSerializerJQLike) {
        var mailerUrl = 'mail/submit.php';
        var successContainsStr = 'Thanks! We\'ve received your information';
        $scope.formData = {
            recipients : "mattk91@gmail.com",
            subject: "Online RSVP"
        };
        $scope.submitted = false;
        $scope.processing = false;

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
            return !!data.indexOf(successContainsStr);
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