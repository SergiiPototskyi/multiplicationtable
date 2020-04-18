

var multiplicationTableApp = angular.module('multiplicationTableApp', ['ui.bootstrap']);

multiplicationTableApp.config(['$tooltipProvider', ($tooltipProvider) => {
    $tooltipProvider.options({
        appendToBody: true, // 
        placement: 'bottom' // Set Default Placement
    });
}]);