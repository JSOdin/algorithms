function MergeSort(arr,a,c){
    var b;
    if (a<c){                   // validating input. also ends recursive here
        b = Math.floor((a+c)/2);
        MergeSort(arr,a,b);    // recursively sort first part
        MergeSort(arr,b+1,c);  // recursively sort second part
        Merge(arr,a,b,c);       // this auxiliary function assumes the subarrays are sorted
    }
}


function Merge(arr,a,b,c){  // 0,7,15
    var n1 = b-a+1; //  number of elements in first half
    var n2 = c-b;   // number of elemtns in second half

    var arrOne = arr.slice(a,a+n1);   // (0,8)
    var arrTwo = arr.slice(a+n1,a+n1+n2); // (8,16);
    arrOne.push(Infinity);       // adding in a "sentinel" value that will be larger than anything, so that when we reach the end of a subarray we can pass the turn to the other array unless both arrays have hit the sentinel value
    arrTwo.push(Infinity);
    var k = 0;
    var l = 0;

    for (var i= a; i<=c; i++){      // we are running c-a+1 times.
        if (arrOne[k] <=arrTwo[l]){
            arr[i] = arrOne[k]
            k++
        } else {
            arr[i] = arrTwo[l]
            l++;
        }
    }
}
var arr =[1,5,4,15,2,4,6,8,15,22,44,1,2,3,4,6,7,12,4,5,1,23,1];
MergeSort(arr,0,7);
console.log(arr);
console.log(arr.length)
