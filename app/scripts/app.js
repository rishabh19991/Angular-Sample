'use strict';

angular.module('sampleApp', [
  'ngCookies',
  'ngResource',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
      controller:'ListCtrl',
      templateUrl:'views/list.html'
    })
    .otherwise({
      redirectTo:'/'
    });
  });
