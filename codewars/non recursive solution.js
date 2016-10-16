function getWords(hash){
    var str='';

    for (var prop in hash){
        str+=Array(+prop+1).join(hash[prop].reduce(function(a,b){return a+b;},''))
    }

    function permute(arr){
        var results = [[]];

        for (var i=0; i<arr.length;i++){                //iterate over the entire input
            while (results[results.length-1].length == i){  // keep running as long as last element's length is equal to iteration index
                var popped = results.pop();                 // the "pivot" point

                for (var j=0; j<=popped.length; j++){
                    var copy = popped.slice();             // this is the copy we use to add on to the pivot point
                    copy.splice(j,0,arr[i]);           // adding the element at various places
                    results.unshift(copy);
                }
            }
        }
        return results;
    }

    return permute(str.split('')).map(function(ea){return ea.join('');}).filter(function(ea,i,arr){return arr.indexOf(ea) == i }).sort();
}

