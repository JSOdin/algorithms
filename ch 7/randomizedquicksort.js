//Quicksorting uses divide-and-conquer approach, sorting in-place.
// it divides an Array[p...r] into subarrays Array[p...q-1] and Array[q+1 ... r]; such that each element of Array[p...q-1] is less than or equal to A[q], Array[q+1...r] 's elements
// are greater than or equal to A[q].
// "partition" loops through p to r-1.
// it tries to segregate elements smaller than or equal to A[r] on the left, and elements greater than or equal to A[r] on the right, then inserts A[r] right in the middle of those two groups
// in the last step.
// the tracking variable "i" serves as the endpoint for the first segregation
// whenever the if(Arr[j] <=end) block runs, the element is placed in the lower segregation, otherwise the higher segregation.


// instead of always choosing r as the pivot, we can randomly designate one from Arr[p...r];
// exchange element Arr[r] with a random element from the array Arr[p...r]
function quickSort(A,p, r){
    if (p<r){
        var q = randomizedPartition(A,p,r);
        quickSort(A,p,q-1);
        quickSort(A,q+1,r);
    }
}

function randomizedPartition(A,p,r){        // we select a random element from the array, and exchange it with the last element A[r]. now we have a new "pivot"
    var i = p+Math.floor(Math.random()*(r-p+1));
    var cache = A[i];
    A[i] = A[r];
    A[r] = cache;

    return partition(A,p,r);
}

function partition(A,p,r){
    var i=p-1;
    var end = A[r];
    var cache;
    for (var j=p;j<r;j++){
        if (Arr[j] <= end){
            i++;
            cache = Arr[i];
            Arr[i] = Arr[j];
            Arr[j] = cache;
        }
    }

    cache = Arr[i+1];
    Arr[i+1] = end;
    A[r] = cache;
    return i+1;
}

var Arr = [1,5,6,7,3,4,1,5,7,8,19,3,5];

quickSort(Arr,0, Arr.length-1);

console.log(Arr);