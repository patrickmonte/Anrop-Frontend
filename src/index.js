var css = require.context('./css', true, /.css$/);
css.keys().forEach(css);

var app = angular.module('app', [
  'auth',
  'bbcode',
  'login',
  'navigation',
  'operations',
  'shouts',
  'streams',
  'ngRoute',
]);

app.constant('ApiConfig', {
  BASE_API: 'https://api.anrop.se',
  BASE_PWS_API: 'https://playwithsix.anrop.se',
  BASE_STREAMS_API: 'https://streams.anrop.se',
});

app.config(function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/login', require('./app/routes/login/login.js'))
    .when('/operations', require('./app/routes/operations/operations.js'))
    .when('/operations/:operationId', require('./app/routes/operations/operation.js'))
    .when('/operations/:operationId/edit', require('./app/routes/operations/edit_operation.js'))
    .when('/shoutbox', require('./app/routes/shouts/shouts.js'))
    .when('/streams', require('./app/routes/streams/streams.js'))
    .otherwise({
      redirectTo: '/operations'
    });
});
