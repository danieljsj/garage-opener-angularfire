angular.module('firebase.config', [])
  .constant('FBURL', 'https://garage-opener.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','facebook','google','twitter'])

  .constant('loginRedirectPath', '/login');
