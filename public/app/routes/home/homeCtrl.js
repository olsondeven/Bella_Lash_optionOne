angular.module('app').controller('homeCtrl',function($scope, $parse, $stateParams, mainService, $rootScope){

  $scope.uploadFile = function() {
      var file = $scope.myFile;

      console.log('file is ');
      console.dir(file);

      var fr = new FileReader();

  };

  //vanilla javascript
  // document.getElementById("openFile").addEventListener('change',function(){
  //   var fr = new FileReader();
  //   console.log(fr);
  //   fr.onload = function(){
  //     document.getElementById("fileContents").textContent = this.result;
  //   }
  //   fr.readAsText(this.files[0]);
  // });

})//closing
