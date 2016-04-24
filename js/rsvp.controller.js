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
        $scope.message = '';

        $scope.submitRsvp = function() {
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

        function isSuccess() {
            return !!data.indexOf(successContainsStr);
        }

        function success() {
            $scope.message = 'Yay!';
            // show message
        }

        function failure() {
            $scope.message = 'Boo!';
            // todo show message
        }

        // todo custom parse response as it always shows a 200 even if there's an error ....
    }
})();