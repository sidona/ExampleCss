'use strict';

/**
 * @ngdoc overview
 * @name exampleCssApp
 * @description
 * # exampleCssApp
 *
 * Main module of the application.
 */
angular
  .module('exampleCssApp', ['ui.router']);

angular.module('exampleCssApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: "views/home.html"
      });
    $stateProvider
      .state('signUp', {
        url: '/signUp',
        templateUrl: "views/signUp.html"
      });
    $stateProvider
      .state('overview', {
        url: '/overview',
        templateUrl: "views/overview.html"
      });
    $stateProvider
      .state('team', {
        url: '/team',
        templateUrl: "views/team.html"
      });
    $stateProvider
      .state('featured', {
        url: '/featured',
        templateUrl: "views/featured.html"
      });
    $stateProvider
      .state('contact', {
        url: '/contact',
        templateUrl: "views/contact.html"
      });
  });
