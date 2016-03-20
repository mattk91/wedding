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
                .when('/event', {
                    templateUrl: 'partials/event.html',
                    controller: 'EventController'
                })
                .when('/places-to-stay', {
                    templateUrl: 'partials/accommodation.html',
                    controller: 'AccommodationController'
                })
                .when('/gifts', {
                    templateUrl: 'partials/gifts.html',
                    controller: 'GiftController'
                })
                .when('/rsvp', {
                    templateUrl : 'partials/rsvp.html',
                    controller: 'RsvpController'
                })
                .when('/things-to-do', {
                    templateUrl: 'partials/things-to-do.html',
                    controller: 'ThingsToDoController'
                })
                .otherwise('/');

            $locationProvider.html5Mode(true);
        }]);
})();