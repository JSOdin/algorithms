function quicksort(A,p,r){
    if (p<r){
        var q = partition(A,p,r);
        quicksort(A,p,q-1);
        quicksort(A,q+1,r);
    }
}

function partition(A,p,r){
    var end = A[r];
    var i = p-1;
    var cache;

    for (var j=p; j<r; j++){
        if (A[j] <= end){
            i++;
            cache = A[j];
            A[j] = A[i];
            A[i] = cache;
        }
    }

    A[r] = A[i+1];
    A[i+1] = end;
    return i+1;
}

var arr = [1,5,3,5,2,6,4,6,3,5];

quicksort(arr,0,arr.length-1);

console.log(arr);
