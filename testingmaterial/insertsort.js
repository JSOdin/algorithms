function insertSort(A){
    for (var i=0; i<A.length;i++){
        var curr = A[i];
        var j = i-1;
        while (j>=0 && A[j] > curr){
            A[j+1] = A[j];
            j--;
        }
        A[j+1] = curr;
    }
}

var arr = [5,3,5,2,4,35,24,11,5];
insertSort(arr);
console.log(arr);
