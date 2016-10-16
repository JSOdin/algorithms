var arr = [14,30,15,60,20,7,9,90,70,50,100,5,8,3,15];

arr.heapsize = 15;

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

function parent(i){
    return ~~((i-1)/2);
}

maxHeapify(arr,0)
console.log(arr);
