'use strict';

/**
 * @ngdoc function
 * @name garageOpenerApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the garageOpenerApp
 */
angular.module('garageOpenerApp')
  .controller('AdminCtrl', function ($scope, Ref, $firebaseArray, $timeout) {



    // synchronize a read-only, synchronized array of adminEmails
    $scope.adminEmails = $firebaseArray(Ref.child('adminEmails'));

    // display any errors
    $scope.adminEmails.$loaded().catch(alert);

    // provide a method for adding a adminEmail
    $scope.addAdminEmail = function(newAdminEmail) {
      if( newAdminEmail ) {
        // push a adminEmail to the end of the array
        $scope.adminEmails.$add(newAdminEmail)
          // display any errors
          .catch(alert);
      }
    };





    // synchronize a read-only, synchronized array of adminEmails
    $scope.memberEmails = $firebaseArray(Ref.child('memberEmails'));

    // display any errors
    $scope.memberEmails.$loaded().catch(alert);

    // provide a method for adding a memberEmail
    $scope.addMemberEmail = function(newMemberEmail) {
      if( newMemberEmail ) {
        // push a memberEmail to the end of the array
        $scope.memberEmails.$add(newMemberEmail)
          // display any errors
          .catch(alert);
      }
    };















    function alert(msg) {
      $scope.err = msg;
      $timeout(function() {
        $scope.err = null;
      }, 5000);
    }
  });
