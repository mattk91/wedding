(function() {
    'use strict';

    angular
        .module('app')
        .controller('RsvpController', RsvpController);

    RsvpController.$inject = ['$scope', '$http', '$httpParamSerializerJQLike', '$anchorScroll', '$timeout'];
    function RsvpController($scope, $http, $httpParamSerializerJQLike, $anchorScroll, $timeout) {
        var mailerUrl = 'mail/submit.php';
        var successContainsStr = 'Thanks!  We\'ve received your information';
        $scope.email = 'mncwedding2016@gmail.com';
        $scope.submitted = false;
        $scope.processing = false;
        $scope.formData = {
            recipients : $scope.email,
            subject: "Online RSVP"
        };
        $scope.tourOptions = [
            {value: 'none', name: 'No tour for me thanks'},
            {value: 'brewery', name: 'Hidden History / Brewery'},
            {value: 'titanic', name: 'Titanic Trail'}
        ];
        $scope.formData.tour = $scope.tourOptions[0].value;
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
            $anchorScroll('rsvp');
        }

        function failure() {
            $scope.submitted = true;
            $scope.processing = false;
            $scope.success = false;
            $anchorScroll('rsvp');
        }

        function process() {
            $scope.processing = true;
            $anchorScroll('rsvp');
        }
    }
})();