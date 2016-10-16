// Page 125, "permute-by-sorting"

function sortByAnotherArray(arr){
    var l = arr.length;
    var p = [];                 // the array with which we want to sort our input
    for (var i=0; i<l; i++){
        p[i] = ~~(Math.random() * Math.pow(l,3));    // p is randomized
    }

    console.log(p);

    for (var j=0; j<p.length;j++){      // special insert sort that sorts arr in the order that p is arranged
        var currP = p[j];
        var currArr = arr[j];
        var k = j-1;
        while (k>=0 && p[k] > currP){
            p[k+1] = p[k];
            arr[k+1] = arr[k];
            k--;
        }
        p[k+1] = currP;
        arr[k+1] = currArr;
    }
}

var arr = [1,5,3,6,4,6,1,2,5];

sortByAnotherArray(arr);

console.log(arr);