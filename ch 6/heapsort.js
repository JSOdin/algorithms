// an ascending sorting algorithm that utilizes the heap methods.
// 1) make a max-heap given an array A
// 2)

function heapSort(A){
    buildMaxHeap(A);                        // make A into a max-heap
    for (var i= A.length-1; i>=1; i--){     // from the end of the heap going backwards,
        var temp = A[i];                    // switch the max element (at the root , index 0) with the last element of the heap
        A[i] = A[0];
        A[0] = temp;
        A.heapsize = A.heapsize-1;          // reduce heapsize by one, effectively removing A[i] from the heap.
        maxHeapify(A,0)                     // every new iteration will have a max value at the root.
    }
}

function buildMaxHeap(A){
    A.heapsize = A.length;
    for (var i=Math.floor(A.length/2); i>=0;i--){
        maxHeapify(A,i);
    }
}

function maxHeapify(A,i){               // if the ith node is smaller than either of its children, the ith value trickles down to a position that would make the subtree rooted at i obeys the max-heap property.
    var l = left(i);                    // maxHeapify assumes l and r subtrees are max-heaps
    var r = right(i);
    console.log(l, r);
    var largest;                         // compare a parent node and its left/right children to find the biggest
    if (l <= A.heapsize-1 && A[l] > A[i]){ // l must be part of the heap
        largest = l;
    } else {
        largest = i;
    }
    if (r <= A.heapsize-1 && A[r] > A[largest]){
        largest = r;
    }
    if (largest != i){                      // if A[i] is largest, then the subtree rooted at node i is already a max-heap and the function terminates
        var temp = A[i];                    // swap the subtree root i with the largest
        A[i] = A[largest];
        A[largest]=temp;
        maxHeapify(A,largest);
    }
}

function left(i){
    return (i<<1) + 1;          //javascript's array is 0based, so code has to be different
}

function right(i){
    return (i<<1)+2;             //javascript's array is 0based, so code has to be different
}
var arr=[5,6,7,1,45,3,3,4,1,5,6,1,5,6,2];
heapSort(arr)

console.log(arr);