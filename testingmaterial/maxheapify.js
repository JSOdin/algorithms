function buildMaxHeap(A,size){
    A.heapsize = size;
    var s = ~~(A.heapsize/2-1);
    for (var i=s; i>=0; i--){
        maxHeapify(A,i);
    }
}

function maxHeapify(A,i){
    var l = left(i);
    var r = right(i);
    var largest = i;

    if (l < A.heapsize && A[l] > A[largest]){
        largest = l;
    }

    if (r < A.heapsize && A[r] > A[largest]){
        largest = r;
    }

    if (largest != i){
        var cache = A[largest];
        A[largest] = A[i];
        A[i] = cache;
        maxHeapify(A,largest);
    }
}

function left(i){
    return (i<<1)+1;
}

function right(i){
    return (i<<1)+2;
}

function parent(i){
    return ~~((i-1)/2);
}

function isMaxHeap(A){
    return A.slice(1).every(function(ea,i){
        return ea <= A[parent(i+1)];
    })
}

var arr = [5,3,4,5,6,7,1,5,2,3,5,6,7,155,25,24];
buildMaxHeap(arr,arr.length);

console.log(isMaxHeap(arr));

console.log(arr);
