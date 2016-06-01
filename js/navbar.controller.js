(function() {
    'use strict';

    angular
        .module('app')
        .controller('NavBarController', NavBarController);

    NavBarController.$inject = ['$scope'];
    function NavBarController($scope) {
        $('.navbar .nav li a').click(function() {
            var navbar_toggle = $('.navbar-toggle');
            if (navbar_toggle.is(':visible')) {
                navbar_toggle.trigger('click');
            }
        });
    }
})();