function buildMaxHeap(A,size){   // builds a heap where the entire tree follows the maxheap property.
    A.heapsize = size;       // heapsize can be anything lower than A.length. anywhere you want to cut off the heap. the rest of the array would not be part of th e heap
    var s = A.heapsize;
    for (var i=~~(s/2-1); i>=0; i--){ // start heapifying from non-leave nodes. a leaf is a node thats on bottom row of a heap.
        maxHeapify(A,i);
    }
}

function maxHeapify(A,i){    // if the ith node is smaller than either of its children, the ith value trickles down to a position that would make the subtree rooted at i obeys the max-heap property.
    var l = left(i);        // maxHeapify assumes l and r subtrees are max-heaps
    var r = right(i);
    var largest = i;         // compare a parent node and its left/right children to find the biggest
    if (l <= A.heapsize-1 && A[l] > A[i]){  // l must be part of the heap
        largest = l;
    }

    if (r <= A.heapsize-1 && A[r] > A[largest]){
        largest = r;
    }

    if (largest != i){      // if A[i] is largest, then the subtree rooted at node i is already a max-heap and the function terminates
        var temp = A[i];     // swap the subtree root i with the largest
        A[i] = A[largest];
        A[largest] = temp;
        maxHeapify(A,largest);
    }
}

function parent(i){
    return ~~((i-1)/2);
}

function left(i){    // getting the index of a parent's left child node ;    x << y  results in  x * 2^y. here, the left child index of 1 is    1 << 1 +1 = 1 * 2^1 + 1 = 3.
    return (i << 1) + 1;    //javascript's array is 0based, so code has to be different
}

function right(i){        // getting the index of a parent's right child node;  x << y  results in  x * 2^y. here, the right child node index of 1 is 1 << 1 +2 = 1 * 2^1 + 2 = 4.
    return (i << 1) + 2;    //javascript's array is 0based, so code has to be different
}
var arr = [1,5,3,6,4,6,1,5,3,5,22,44,55,66,3,5,2,4,7,8,9];
buildMaxHeap(arr,arr.length);
function ismaxheap(arr){
    return arr.slice(1).every(function(ea,i){
        return ea <= arr[parent(i+1)];
    }); // checks if a heap is a max-heap
}
console.log(arr);

console.log(ismaxheap(arr))