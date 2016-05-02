(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', 'stellar'];
    function MainController($scope, stellar) {
        stellar.against(window);
    }

})();
