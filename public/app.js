var app = angular.module('nodePractice', ['ui.router', 'ngMaterial'])

.config(['$mdThemingProvider', '$stateProvider', '$urlRouterProvider', function($mdThemingProvider, $stateProvider, $urlRouterProvider) {
  	$mdThemingProvider.theme('default')
    	.primaryPalette('light-blue')
    	.accentPalette('pink');
    
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            views: {
                'header': { 
                    templateUrl: 'views/headerTmpl.html',
                    controller: 'HeaderCtrl' 
                },
                'content': { 
                    templateUrl: 'views/homeTmpl.html',
                    controller: 'HomeCtrl' 
                }
            }
        });
        
}]); // end config //