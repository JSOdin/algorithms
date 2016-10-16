function permuter(arr){
    var results = [];   // "global" var to collect all the permutation results

    function permute(arr, memo){      // "memo" will remember the buildup of a single result as members are added onto it
        var curr;
        var memo = memo || [];
        for (var i=0; i<arr.length;i++){
            curr = arr.splice(i,1);  // the item to insert into the single result

            if (arr.length == 0){
                results.push(memo.concat(curr));
            }

            permute(arr.slice(), memo.concat(curr));  // memo begins with each of the letters from the original array.
            arr.splice(i,0,curr[0]);                 // return the original back to its unmutated state for the next iteration.
        }

        return results;
    }

    return permute(arr);
}

console.log(permuter(['a','b','c']))

// this implementation creates multiple nested loops recursively, and builds up each single result in a tree-like procedure (as you would do manual permutations) then adding
// each to a final results array that gets returned in the end.