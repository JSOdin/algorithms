var items = [
    ['Anne', 'a'],
    ['Bob', 'b'],
    ['Henry', 'b'],
    ['Andrew', 'd'],
    ['Jason', 'c'],
    ['Thomas', 'b']
]

var sorting = [ 'b', 'a', 'b', 'b', 'c', 'd' ];
var results = [];

function sortArrayByAnother(arr,otherArr){
    var copy = arr.slice();
    for (var i=0; i<otherArr.length;i++){
        var found = false;
        copy = copy.filter(function(ea){
            if (!found && ea[1] == otherArr[i]){
                found = true;
                results.push(ea);
                return false
            } else {
                return true;
            }
        })
    }

    return results;
}

console.log(sortArrayByAnother(items,sorting));