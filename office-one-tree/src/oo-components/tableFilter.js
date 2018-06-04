var tableFilter = function(tableArray, columnString, filterString, maxSize) {

    var monthFilter = function(valueDate, monthString) {
        var month = new Date(valueDate).getMonth();
        console.log(month);
        return (month===window.store.getState().UI.buchungsperiode.split(" ")[0]-1);
    };

    var returnTableArray = [];
    var spalte = {};
    for (var columnIndex in tableArray[0]) {
        spalte[tableArray[0][columnIndex]] = columnIndex;
    }

    for (var index in tableArray) {
        if (index !== "0") {
            var filterValue = tableArray[index][spalte[columnString]];
            if (monthFilter(filterValue, filterString)) {
                returnTableArray.push(tableArray[index]);
                if (returnTableArray.length>=maxSize)return returnTableArray;
            }
        }
    }

    return returnTableArray;
};
window.tableFilter = tableFilter;