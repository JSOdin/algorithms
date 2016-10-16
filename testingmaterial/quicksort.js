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
            cache = A[i];
            A[i] = A[j];
            A[j] = cache;
        }
    }

    cache = A[i+1];
    A[i+1] = end;
    A[r] = cache;
    return i+1;
}

var arr = [355,24,35,155,111,23,24,15,3,5,2,5,33,36,444];
quicksort(arr,0,arr.length-1);
console.log(arr)