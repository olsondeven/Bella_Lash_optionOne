angular.module('app').controller('homeCtrl', function($scope, $parse, $stateParams, mainService, $rootScope) {
  //Declare "variables" $scope properties/keys, this will allow me to display them
        $scope.folderFiles = new Array;
        $scope.strArray = new Array;
        $scope.foundFile = null;
        var phrase = "";
        // vanilla javascript to grab the folder with 100 files in it
        // create input box that takes in folder
        // eventlistener for when the files have been uploaded
        document.getElementById("openFile").addEventListener('change', function() {
          // Set values to correct values
            $scope.folderFiles = this.files;
          // for loop and store content on file
            for (var i = 0; i < $scope.folderFiles.length; i++) {
                var fr = new FileReader();
                fr.onload = function(){
                  $scope.strArray.push({content:this.result});
                  // $scope.folderFiles[i].content = this.result;
                }
                fr.readAsText($scope.folderFiles[i]);
            }
            console.log($scope.folderFiles6);
            console.log($scope.strArray);
        });

    }) //closing
