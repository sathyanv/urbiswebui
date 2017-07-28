'use strict';

/**
 * @ngdoc overview
 * @name urbiswebuiApp
 * @description
 * # urbiswebuiApp
 *
 * Main module of the application.
 */
angular
  .module('urbiswebuiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/urbisroute', {
        templateUrl: 'views/urbisroute.html',
        controller: 'UrbisrouteCtrl',
        controllerAs: 'urbisroute'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
