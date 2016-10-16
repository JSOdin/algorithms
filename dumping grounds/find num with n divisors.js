function findMinNum(num) {
    // your code
    // use while loop, start from 1. in the while loop, for loop up until the number. cache any result into an object.
    // for opt performance, dont repeat
    var cache={};
    var n=1

    while (Object.keys(cache).indexOf(num) < 0){
        var counter=0;
        for (var i=1; i<=n;i++){
            if (n%i){counter++}
        }
        cache[counter]= cache[counter] || n;
        n++;
    }

    return cache[num];
}

console.log(findMinNum(5))