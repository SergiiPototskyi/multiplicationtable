

multiplicationTableApp.factory('mtService',
    function () {

        return {
            tableName: "Multiplication Table",
            x_numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            y_numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            tableLimit: 10,
            displayOptions:
                [
                    decimalMode = 'Decimal',
                    binaryMode = 'Binary',
                    hexMode = 'Hexademical'
                ]
        }
    });