angular.module('app').directive('fileModel', function($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            //declare needed variables
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            //this event listener allows file to be uploaded when button is clicked.
            element.bind('change', function() {
                scope.$apply(function() {
                    modelSetter(scope, element[0].files[0]);
                });
            });
           element.bind('change',function(){

           });
        }
    }; //return closing
}); //closing
