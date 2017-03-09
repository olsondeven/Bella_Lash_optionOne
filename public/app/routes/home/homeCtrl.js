angular.module('app').controller('optionOneCtrl', function($scope, $parse, $stateParams, mainService, $rootScope) {
  //constructor function for objs to be pushed to an array
  // function NewFile(name,content){
  //   this.name = name;
  //   this.content = content;
  // }
  //Declare "variables" $scope properties/keys, this will allow me to display them
        $scope.folderFiles = [];
        $scope.strArray = [];
        $scope.foundFile = [];
        // vanilla javascript to grab the folder with 100 files in it
        // create input box that takes in folder
        // eventlistener for when the files have been uploaded
        document.getElementById("openFile").addEventListener('change', function() {
          // Set values to correct values
            $scope.folderFiles = this.files;
          // for loop and store content on file
            for(let i = 0; i < $scope.folderFiles.length; i++) {
                var fr = new FileReader();

                fr.onload = function(){
                  $scope.strArray.push({content:this.result,name: $scope.folderFiles[i].name});
                }
                //this allows for filereader to extract content of file as a string,
                //the result of readAsText is a string
                //passed var i as an argument so I would have the value of i in the onload function
                fr.readAsText($scope.folderFiles[i],i);
            }
            console.log($scope.folderFiles);
            console.log($scope.strArray);
            //questions to ask Bruno
            //is the phrase case sensitive
            //return the file name ? or display the file that has the phrase
        });//end of upload

        //set phrase from user function, takes in a string and matches any files that
        //have that string
        $scope.setPhrase = function(phrase){

          console.log('SetPhrase fn fired',phrase);

        }

    }) //closing
