angular.module('things.controller', [])

.controller('thingsCtrl', ['$scope', '$routeParams', 'syncData', function ($scope, $routeParams, syncData) {
  $scope.sprintId = $routeParams.sprintId;
  $scope.sprint = syncData('/sprints/' + $scope.sprintId);



  //$scope.categories = syncData('categories');

  $scope.addCategory = function( value ){
    //console.log(value);
    $scope.sprint.$child('things').$add({title: value});
    $scope.newCategory = "";
  }
  $scope.updateCategory = function(id, val, child){
    $scope.sprint.$child('things').$child( id ).$child( child ).$set( val );
    $scope.updateTitle = false;
  }
  $scope.removeCategory = function( id ){
    $scope.sprint.$child('things').$child( id ).$remove();
    console.log(id);
  }
  $scope.addSmile = function(id, smiles){
    if(smiles) {
      var smile = parseInt(smiles, 10);
      smile++
      console.log(smile)
      $scope.sprint.$child('things').$child(id).$child('smiles').$set(smile);
    } else {      
      $scope.sprint.$child('things').$child(id).$child('smiles').$set(1);
    }
  }
  $scope.addFrown = function(id, frowns){
    if(frowns) {
      var frown = parseInt(frowns, 10);
      frown++
      console.log(frown)
      $scope.sprint.$child('things').$child(id).$child('frowns').$set(frown);
    } else {      
      $scope.sprint.$child('things').$child(id).$child('frowns').$set(1);
    }
  }


}])