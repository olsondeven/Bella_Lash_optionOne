angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  //default router
  //home page and landing page
  $stateProvider
  .state('optionOne', {
    url: '/',
    templateUrl: './app/routes/home/homeTemp.html',
    controller: 'optionOneCtrl'
  });

  $urlRouterProvider.otherwise('/');
});//closing
