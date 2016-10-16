var toSort = [
    ['giraffe','a'],
    ['dog','b'],
    ['sample','a'],
    ['computer','c'],
    ['monitor','a'],
    ['moniker','a'],
    ['trumpet','b']
];

var sortBy = ['c','a','a','b','b','a','a'];

function sortMultiArray(toSort,sortBy){
    var results = [];
    var copy = toSort.slice();
    var l = sortBy.length;
    for(var i=0; i<l; i++){
        var found = false;
        copy = copy.filter(function(ea){
            if (!found && ea[1] == sortBy[i]){
                found = true;
                results.push(ea);
                return false;
            }else{
                return true;
            }
        })
    }
    return results;
}

console.log(sortMultiArray(toSort,sortBy))