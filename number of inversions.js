/** straightforward implementation **/

function inversionnum(arr){
    var count = 0;
    var pairs = [];
    for (var i=0; i<arr.length-1;i++){
        for (var j=i+1;j<arr.length;j++){
            if (arr[i] > arr[j]){
                count++;
                pairs.push([arr[i],arr[j]])
            }
        }
    }
    console.log(pairs);
    return count;
}

console.log(inversionnum([6,1,2,4,6,1,6,2,4,1,3,2,4,3,5,1,6,7,8,9,1,2,3,4,6]))