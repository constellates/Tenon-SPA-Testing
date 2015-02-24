angular.module('app', ['ui.router']);

angular.module('app').config(routes);

// routing -----------------------------------------------------------------

function routes ($stateProvider, $urlRouterProvider, $locationProvider) {

    // configuration -------------------------------------
    $urlRouterProvider.otherwise('/'); // default state
    $locationProvider.html5Mode(true); // enable #-less routing

    // states --------------------------------------------
    $stateProvider

    .state('home',    {url: '/',        templateUrl: 'views/home.html'})
    .state('about',   {url: '/about',   templateUrl: 'views/about.html'})
    .state('contact', {url: '/contact', templateUrl: 'views/contact.html'});

}
