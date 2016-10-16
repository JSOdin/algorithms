// long running, doesnt pass tests :(
// http://www.codewars.com/kata/562c5ea7b5fe27d303000054/train/javascript
console.time('associateTime');
function sscForperm(arr){
    var p = permute(arr);
    return [{"total perm":p.length}, {"total ssc": p.reduce(function(a,b){return a+b;},0)}, {"max ssc":Math.max.apply(null,p)}, {"min ssc": Math.min.apply(null,p)}];
}

function permute(arr){
    var res = [[]];
    var obj = {};
    for (var i=0; i<arr.length;i++){
        while (res[res.length-1].length == i){
            var pop = res.pop();
            for (var j=0; j<=pop.length;j++){
                var copy = pop.slice();
                copy.splice(j,0,arr[i]);
                var key = JSON.stringify(copy);
                if (!obj[key]){
                    if (copy.length == arr.length){
                        copy = copy.map(function(ea,i){return ea*(i+1)}).reduce(function(a,b){return a+b;},0);
                    }
                    res.unshift(copy);
                    obj[key] = true;
                }
            }
        }
    }
    return res
}

sscForperm([1,5,6,7,6,8,15,17,18])

console.timeEnd('associateTime');
