'use strict';

/**
 * @ngdoc overview
 * @name publicApp
 * @description
 * # publicApp
 *
 * Main module of the application.
 */
angular
  .module('hts', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    // 'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ngFileUpload',
    'ui.router'
  ])
  .run(['$rootScope','$state','$stateParams',function($rootScope,$state,$stateParams){
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }]) 
  .config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/signin');
    $stateProvider
      .state('signIn',{
        url:'/signin',
        views:{
          'main':{
            templateUrl: 'views/signIn.html',
            controller: 'signInCtrl'
          }
        }        
      })
      .state('member',{
        url:'/member',
        views:{
          'main':{
            templateUrl: 'views/member.html',
            controller: 'memberCtrl'
          }
        }        
      })
      .state('events',{
        url:'/events',
        views:{
          'main':{
            templateUrl: 'views/events.html',
            controller: 'eventsCtrl'
          }
        }        
      })

;
 
  }]);

