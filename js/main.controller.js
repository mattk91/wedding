(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$location'];
    function MainController($scope, $location) {
        //stellar.against(window);
        $location.hash('');
    }

})();
