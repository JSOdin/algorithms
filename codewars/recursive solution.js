function getWords(hash){
    var str='';

    for (var prop in hash){
        str+=Array(+prop+1).join(hash[prop].reduce(function(a,b){return a+b;},''))
    }

    function initiate(inputArr){
        var results = [];

        function permutation(arr, build){
            var build = build || '';

            var curr, i;

            for (i=0; i<arr.length; i++){
                curr = arr.splice(i,1);

                if (arr.length == 0){
                    results.push(build+curr[0]);
                }

                permutation(arr.slice(), build+curr[0]);
                arr.splice(i,0,curr[0]);
            }

            return results;
        }

        return permutation(inputArr);
    }

    return initiate(str.split('')).filter(function(ea,i,arr){return arr.indexOf(ea) == i }).sort();
}