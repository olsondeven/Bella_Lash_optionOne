'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
  //default router
  //home page and landing page
  $stateProvider.state('optionOne', {
    url: '/',
    templateUrl: './app/routes/home/homeTemp.html',
    controller: 'optionOneCtrl'
  });

  $urlRouterProvider.otherwise('/');
}); //closing
'use strict';

angular.module('app').service('mainService', function ($http) {
    this.uploadFileToUrl = function (file, uploadUrl) {
        var fd = new FormData();
        fd.append('file', file);

        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {
                'Content-Type': undefined
            }
        }).success(function () {}).error(function () {});
    };
}); //closing
'use strict';

angular.module('app').controller('optionOneCtrl', function ($scope, $state, $sce, $stateParams, mainService, $rootScope) {
    //Declaring variables or $scope properties/keys
    var folderFiles = new Array();
    var strArray = new Array();
    $scope.foundFile = new Array();
    $scope.found = false;
    $scope.totalFiles = 0;
    // vanilla javascript to grab the folder with 100 files in it
    // create input box that takes in folder
    // eventlistener for when the files have been uploaded
    document.getElementById("openFile").addEventListener('change', function () {
        // Set values to correct values
        folderFiles = this.files;
        // for loop and store content on file

        var _loop = function _loop(i) {
            fr = new FileReader();

            fr.onload = function () {
                strArray.push({
                    content: this.result,
                    name: folderFiles[i].name
                });
            };
            //this allows for filereader to extract content of file as a string,
            //the result of readAsText is a string
            //passed var i as an argument so I would have the value of i in the onload fn
            fr.readAsText(folderFiles[i], i);
        };

        for (var i = 0; i < folderFiles.length; i++) {
            var fr;

            _loop(i);
        }
        console.log("before", fr);
    }); //end of upload

    //set phrase from user function, takes in a string and matches any files that
    //have that string
    $scope.setPhrase = function (phrase) {
        //questions to ask Bruno
        //is the phrase case sensitive
        //return the file name ? or display the file that has the phrase
        //if no input set phrase to "Find me"
        $scope.totalFiles = strArray.length;
        if (folderFiles.length === 0 || strArray.length === 0) {
            return swal('Please select a directory');
        }
        if (!phrase) {
            phrase = 'Find me';
        }
        console.log(strArray);
        strArray.forEach(function (element, index) {
            var regPhrase = new RegExp(phrase);
            var regHighlight = new RegExp(phrase, "g");
            if (element.content.search(regPhrase) != -1) {
                //allows searched word to be highlighted
                // element.content = $sce.trustAsHtml(element.content.replace(regHighlight, `<span>${phrase}</span>`));
                element.content = $sce.trustAsHtml(element.content.replace(regHighlight, '<span>' + phrase + '</span>'));
                $scope.foundFile.push(element);
                $scope.found = true;
            }
        });
    };
    //clear function, sets everything to zero
    $scope.clear = function () {
        folderFiles = [];
        strArray = [];
        $scope.foundFile = [];
        $scope.found = false;
        $scope.totalFiles = 0;
        $scope.userInput = "";
        $state.reload();
    };
}); //closing
//# sourceMappingURL=bundle.js.map
