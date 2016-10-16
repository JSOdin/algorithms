// recursive version

function inversionCounter(array) {
    var i = 0;                                                      // initial value;
    if (array.length > 1) {                                         // a condition that terminates recursive looping
        return math(array)+ inversionCounter(array.slice(i+1));    // characteristic of recursions: add an existing value to recursive call return values
    } else {
        return 0;
    }
}

function math(array){
    var count = 0;
    for (var i=1; i<array.length;i++){
        if (array[0] > array[i]){
            count++;
        }
    }

    return count;
}

console.log(inversionCounter([6,1,2,4,6,1,6,2,4,1,3,2,4,3,5,1,6,7,8,9,1,2,3,4,6]))