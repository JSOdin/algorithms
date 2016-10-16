/** an inefficient but popular algorithm **/
function bubblesort(arr){
    for (var i=0; i<arr.length;i++){
        for (var j=arr.length-1;j>=i+1;j--){
            if (arr[j] < arr[j-1]){
                var temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
        }
    }
    return arr;
}

var arr = [5,4,1,6,5,4,7,9,1,2,4];

bubblesort(arr);

console.log(arr);