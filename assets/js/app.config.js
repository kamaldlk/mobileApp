'use strict';
angular.module("hexode").config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
function ($stateProvider, $urlRouterProvider,  $httpProvider) {

                
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/modules/home/home.html',
                controller: 'homeCtrl'
            })
            
    }
]);