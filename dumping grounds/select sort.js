function selectSort(arr){
    var subSize,smallest;
    for (var i=0; i<arr.length-1;i++){
        subSize = arr.length-1-i; // first subarray to compare initially to the 0th term.
        smallest= i; //
        while(subSize){
            smallest = arr[smallest] > arr[arr.length-1-subSize+1] ? arr.length-1-subSize+1 : smallest;   // smallest = i,
            subSize--;
        }

        var temp = arr[i];
        arr[i] =  arr[smallest];
        arr[smallest] = temp;
    }
}
var arr =[5,1,4,6,8,19,4,2,615,241,231425,5];
selectSort(arr);

console.log(arr);