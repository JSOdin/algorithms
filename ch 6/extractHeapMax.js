function getHeapMaximum(A){ // a contrived function that returns the root of the heap in a max-heap.
    return A[0];
}

function heapExtractMax(A){ // extract and return the max (while removing it from the heap)
    if (A.heapsize < 1){
        throw Error('heap is too small');
    }

    var max = A[0];         // cache the max value;
    A[0] = A[A.heapsize-1]; // we want to remove the max from the heap. assign the root node to the last element of heap.
    A.heapsize = A.heapsize-1;  // since we are removing one. heapsize reduce by one.
    maxHeapify(A,0);            // make the heap a max-heap again,
    return max;
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