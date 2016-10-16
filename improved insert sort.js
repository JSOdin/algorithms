/*function insertSort(arr){    // implemented wrong, is not insert sort.
    for (var i= 1; i<arr.length;i++) {
        var curr = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > curr) {
            var temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
}*/

function insertSort(arr){
    for (var i= 1; i<arr.length;i++) {
        var curr = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > curr) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = curr;
    }
}

var arr = [5,8,1,4,6,2,3,9,1,4,2,56,144,11,2,55];

insertSort(arr);

console.log(arr);