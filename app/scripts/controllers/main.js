'use strict';

/**
 * @ngdoc function
 * @name garageOpenerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the garageOpenerApp
 */
angular.module('garageOpenerApp')
  .controller('MainCtrl', function ($scope, Ref, /*user,*/ $firebaseObject) {
    
    // unknown provider userProvider

    $scope.triggerDoor = function(){


    	var latestTriggeringRef = Ref.child('latestTriggering');
    	// var userRef = Ref.child('users/'+user.uid);

    	// userRef.once('value', function(userDataSnapshot) {

    		var userDataSnapshot = {name:"Laura Ipsum"};
	    	latestTriggeringRef.set({Time: Firebase.ServerValue.TIMESTAMP, Username: userDataSnapshot.name}, function(error) {
			  if (error) {
			    console.log('Synchronization failed');
			  } else {
			    console.log('Synchronization succeeded');
			  }
			});

		// });
		
    };

  });
