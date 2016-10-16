function insertsort(arr){
    for (var i=1; i<arr.length;i++){
        var j=i-1;
        var curr = arr[i];
        while (j>=0 && arr[j] > curr){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = curr;
    }
}

var arr = [1,5,3,5,2,4,3,5,1,2,5,6];

insertsort(arr);

console.log(arr);