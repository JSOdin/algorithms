function lastFibDigit(n){

    var fibonacci = (function(){
        var cache = {};

        return function(n){
            if (cache[n]){
                return cache[n];
            }

            return cache[n] = n <=2 ? 1 : fibonacci(n-1)+fibonacci(n-2);
        }
    })()

    var result = fibonacci(n).toString()

    return +result.charAt(result.length-1)
}
console.log(lastFibDigit(62))