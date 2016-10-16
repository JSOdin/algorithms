function findMinNum(num) {
    var n = 0
    var i = 0;

    while (n!=num){
        i++;
        n=0;
        var sqr = Math.floor(Math.sqrt(i));

        for (var j=1; j<=sqr;j++){
            if (i%j == 0){
                n++;
                if (j*j != i){
                    n++;
                }
            }
        }

    }

    return i
}

console.log(findMinNum(7))