angular.module('app').controller('homeCtrl',function($scope, $stateParams, mainService, $rootScope){

  $scope.takeFile = function(file){
    console.log(file);
  };




  //vanilla javascript
  document.getElementById("openFile").addEventListener('change',function(){
    var fr = new FileReader();
    console.log(fr);
    fr.onload = function(){
      document.getElementById("fileContents").textContent = this.result;
    }
    fr.readAsText(this.files[0]);
  });


})//closing
