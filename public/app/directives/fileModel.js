angular.module('app').directive('fileModel', function($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            
            var model = $parse(attrs.fileModel);
            console.log(model);
            console.log(model.assign);
            var modelSetter = model.assign;
            console.log(modelSetter);
            element.bind('change', function() {
                scope.$apply(function() {
                    modelSetter(scope, element[0].files[0]);
                    console.log(modelSetter);
                });
            });
        }
    }; //return closing
}); //closing
