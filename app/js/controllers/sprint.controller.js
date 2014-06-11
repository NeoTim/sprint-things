angular.module('sprint.controller', [])

.controller('sprintsCtrl', ['$scope', 'syncData', function ( $scope, syncData ) {
  $scope.sprints = syncData('sprints');
  

  $scope.addSprint = function( data ){
    $scope.sprints.$add( {title: data} );
    $scope.newSprint = "";
  };
  $scope.updateSprint = function( id, value, child ){
    $scope.sprints.$child(id).$child(child).$set(value);
  };
  $scope.removeSprint = function( id ){
    $scope.sprints.$child(id).$remove();
  };
}]);

