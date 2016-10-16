//
// a sorting function that makes appoints the last element of array as a "pivot" against which the rest of the array is compared against.
// lesser or equal values are segregated to the left, bound by "i" and greater values are segreated to the right, bound by "j".

console.time('timer')
function quickSort(A,p, r){
    if (p<r){                       // start "p" needs to be less than end "r"
        var q = partition(A,p,r);   // find the dividing point
        quickSort(A,p,q-1);         // recursively sort up to but not including q
        quickSort(A,q+1,r);         // recursively sort after q
    }
}

function partition(A,p,r){
    var i=p-1;          // i starts at -1;
    var end = A[r];     // take the end item by default as the pivot
    var cache;
    for (var j=p;j<r;j++){  // loop from p to r-1
        if (A[j] <= end){  // compare the current item to the pivot
            i++;            // move up the lesser group boundary
            cache = A[i];   // swap values 
            A[i] = A[j];
            A[j] = cache;
        }
    }

    cache = A[i+1];     // swap the pivot and beginning member of the greater segregate.
    A[i+1] = end;
    A[r] = cache;
    return i+1;         // return the "midpoint" index
}


var Arr =  [35, 25, 53, 3, 102, 203, 230, 1005];

for (var i=1; i<9000000;i++){
    Arr.push(~~(Math.random()*6001))
}
quickSort(Arr,0, Arr.length-1);

console.timeEnd('timer')