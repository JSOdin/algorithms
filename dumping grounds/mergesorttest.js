
function Merge(arr,a,b,c){
    var n1 = b-a+1;
    var n2 = c-b;

    var arrOne = arr.slice(a,a+n1);
    var arrTwo = arr.slice(a+n1,a+n1+n2);
    arrOne.push(Infinity);
    arrTwo.push(Infinity);

    var l= 0,k=0;

    for (var i= a;i<=c;i++){
        if (arrOne[l] <= arrTwo[k]){
            arr[i] = arrOne[l];
            l++;
        } else {
            arr[i] = arrTwo[k];
            k++;
        }
    }
}

function MergeSort(arr,a,c){
    if (a<c){
        var b = Math.floor((c-a)/2);
        MergeSort(arr,a,b);
        MergeSort(arr,b+1,c);
        Merge(arr,a,c);
    }
}
var arr =[1,6,5,4,6,9,11,35,24,1,2,3,6]
MergeSort(arr,0,arr.length-1)
console.log(arr);