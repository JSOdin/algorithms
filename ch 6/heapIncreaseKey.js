// "key" just means the value of a heap element
// maxHeapInsert just

function maxHeapInsert(A,key){
    A.heapsize= A.heapsize+1;
    A[A.heapsize-1] = -Infinity;                            // add a new member of heap as the last element. (with the new heapsize)
    heapIncreaseKey(A, A.heapsize-1,key)                    // set a new key for this element and move the new element upwards as needed until max-property is satisfied
}

function heapIncreaseKey(A, i, key){ //   increase element i's value (key) and re-maxify the heap to hold the property.
    if (key < A[i]){
        return new Error('new key is smaller than current key');
    }
    A[i] = key;
    while (i>0 && A[parent(i)] < A[i]){     // keep traversing up the heap chain, comparing the element to its parent.  we want to go up to right before our root
        var temp = A[i];
        A[i] = A[parent(i)];                // swap the element and its parent if element is bigger than its parent
        A[parent(i)] = temp;
        i=parent(i);                        // new element we are examining is the previous element's parent.
    }
}

function parent(i){
    var shifted = i>>1; // 1>>1 = 0;
    return (!shifted || shifted % 2) ? shifted : shifted-1; // 0 or odd return shifted else minus one.
}

var heap = [9,8,7,6,5,4,3,2,1];
heap.heapsize = heap.length;
maxHeapInsert(heap,46);
maxHeapInsert(heap,66);
console.log(heap)
