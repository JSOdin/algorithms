function bucketSort(arr){
    var B = [];

    var n = arr.length;

    for (var i=0; i<=9;i++){
        B[i] = [];
    }

    for (var i=0; i<n; i++){
        var ind = ~~(arr[i]*10)
        B[ind].push(arr[i]);
    }

    for (var j=0; j<=9; j++){
        insertSort(B[j]);
    }

    return B.reduce(function(a,b){return a.concat(b)},[]);
}

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

var arr = [];

for (var i=0; i<500;i++){
    arr.push(Math.random());
}

console.log(bucketSort(arr))