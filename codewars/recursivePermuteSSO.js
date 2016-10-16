console.time('associateTime')
/*function sscForperm(arr){
    var p = permuter(arr);
    return [{"total perm":p.length}, {"total ssc": p.reduce(function(a,b){return a+b;},0)}, {"max ssc":Math.max.apply(null,p)}, {"min ssc": Math.min.apply(null,p)}];
}
function permuter(arr){
    var results = [];   // "global" var to collect all the permutation results
    var obj={};
    function permute(arr, memo){      // "memo" will remember the buildup of a single result as members are added onto it
        var curr;
        var memo = memo || [];
        for (var i=0; i<arr.length;i++){
            curr = arr.splice(i,1);  // the item to insert into the single result
            if (arr.length == 0){
                if (!obj[JSON.stringify(memo.concat(curr*(memo.length+1)))]){
                    results.push(memo.concat(curr*(memo.length+1)).reduce(function(a,b){return a+b;},0));
                    obj[JSON.stringify(memo.concat(curr*(memo.length+1)))] = true;
                }
            }
            permute(arr.slice(), memo.concat(curr*(memo.length+1)));  // memo begins with each of the letters from the original array.
            arr.splice(i,0,curr[0]);                 // return the original back to its unmutated state for the next iteration.
        }
        return results;
    }
    return permute(arr);
}*/



function sscForperm(arr){
    var raw = permuter(arr);
    var strd = raw.map(function(ea){return JSON.stringify(ea)});
    var p = raw.filter(function(ea,i){
        return strd.indexOf(JSON.stringify(ea)) == i
    }).map(function(ea){
        return ea.map(function(ea,i){
            return ea*(i+1)
        })}).reduce(function(a,b){
             return a+b;
    },0)
    return [{"total perm":p.length}, {"total ssc": p.reduce(function(a,b){return a+b;},0)}];
}

function permuter(arr){
    var results = [];   // "global" var to collect all the permutation results
    var obj={};
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


sscForperm([1,5,6,7,6,8,15,17,18])


console.timeEnd('associateTime')