angular.module('app').controller('optionOneCtrl', function($scope, $parse, $stateParams, mainService, $rootScope) {
  //constructor function for objs to be pushed to an array
  // function NewFile(name,content){
  //   this.name = name;
  //   this.content = content;
  // }
  //Declaring variables or $scope properties/keys
        let folderFiles = new Array;
        let strArray = new Array;
        $scope.foundFile = new Array;
        $scope.found = false;
        // vanilla javascript to grab the folder with 100 files in it
        // create input box that takes in folder
        // eventlistener for when the files have been uploaded
        document.getElementById("openFile").addEventListener('change', function() {
          // Set values to correct values
            folderFiles = this.files;
          // for loop and store content on file
            for(let i = 0; i < folderFiles.length; i++) {
                var fr = new FileReader();

                fr.onload = function(){
                  strArray.push({content:this.result,name: folderFiles[i].name});
                }
                //this allows for filereader to extract content of file as a string,
                //the result of readAsText is a string
                //passed var i as an argument so I would have the value of i in the onload fn
                fr.readAsText(folderFiles[i],i);
            }
        });//end of upload

        //set phrase from user function, takes in a string and matches any files that
        //have that string
        $scope.setPhrase = (phrase)=>{
          //questions to ask Bruno
          //is the phrase case sensitive
          //return the file name ? or display the file that has the phrase
          //if no input set phrase to "Find me"
          if(!phrase){
            phrase = 'Find me'
          }
          strArray.forEach(function(element,index){
            var regPhrase = new RegExp(phrase);
            if(element.content.search(regPhrase) != -1){
              $scope.foundFile.push(element);
              $scope.found = true;
            }
          });
          // console.log('SetPhrase fn fired',phrase);
          // console.log(folderFiles);
          // console.log(strArray);
          // console.log($scope.foundFile);

          //clear out everything but $scope.foundFile
          
        };

    }) //closing
