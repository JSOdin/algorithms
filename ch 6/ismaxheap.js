function ismaxheap(arr){
    return arr.slice(1).every(function(ea,i){
        return ea <= arr[parent(i+1)];
    }); // checks if a heap is a max-heap
}
console.log(ismaxheap([23,17,14,6,13,10,.1,5,7,12]))