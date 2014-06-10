angular.module('interface.controller', [])


.controller('interfaceCtrl', ['$scope', 'syncData', function ($scope, syncData) {
  $scope.categories = syncData('categories');

  $scope.addCategory = function( value ){
    $scope.categories.$add({title: value});
    //console.log(value);
    $scope.newCategory = "";
  }
  $scope.updateCategory = function(id, val, child){
    $scope.categories.$child( id ).$child( child ).$set( val );
    $scope.updateTitle = false;
  }
  $scope.removeCategory = function( id ){
    $scope.categories.$child( id ).$remove();
    console.log(id);
  }
  $scope.addSmile = function(id, smiles){
    if(smiles) {
      var smile = parseInt(smiles, 10);
      smile++
      console.log(smile)
      $scope.categories.$child(id).$child('smiles').$set(smile);
    } else {      
      $scope.categories.$child(id).$child('smiles').$set(1);
    }
  }
  $scope.addFrown = function(id, frowns){
    if(frowns) {
      var frown = parseInt(frowns, 10);
      frown++
      console.log(frown)
      $scope.categories.$child(id).$child('frowns').$set(frown);
    } else {      
      $scope.categories.$child(id).$child('frowns').$set(1);
    }
  }
}])