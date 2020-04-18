

multiplicationTableApp.controller('mtController',
    function MultipliationTableController($scope, mtService) {
        $scope.tableName = mtService.tableName;
        $scope.x_numbers = mtService.x_numbers;
        $scope.y_numbers = mtService.y_numbers;
        $scope.tableLimit = mtService.tableLimit;
        $scope.displayOptions = mtService.displayOptions;
        $scope.mode = $scope.displayOptions[0];

        $scope.displayFormat = (number) => {

            if ($scope.mode === 'Binary') {
                return number.toString(2);
            }

            if ($scope.mode === 'Hexademical') {
                return number.toString(16);
            }

            return number;
        }

        $scope.isPrime = (num) => {
            for (var i = 2; i < num; i++)
                if (num % i === 0) return false;
            return num > 1;
        }
    });