(function() {
    'use strict';

    angular
        .module('app')
        .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $routeProvider

                .when('/', {
                    templateUrl: 'partials/home.html',
                    controller: 'HomeController'
                })
                .otherwise({redirectTo: '/'});

            $locationProvider.html5Mode(true);
        }]);
})();