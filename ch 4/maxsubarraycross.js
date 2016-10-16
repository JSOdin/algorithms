function maxcross(arr,l,m,h){
    var recordlmax = -Infinity;
    var clmax = 0;
    var lindex;

    for (var i=m;i>=l;i--){
        clmax = clmax + arr[i];
        if (clmax > recordlmax){
            recordlmax = clmax;
            lindex = i;
        }
    }

    var recordrmax = -Infinity;
    var crmax = 0;
    var rindex;

    for (var j=m+1; j<=h; j++){
        crmax = crmax + arr[j];
        if (crmax > recordrmax){
            recordrmax = crmax;
            rindex = j;
        }
    }

    return [lindex,rindex,recordlmax+recordrmax];
}

console.log(maxcross([0,5,4,-3,-2,1,5,4,6,-7,-8,9,-8,6,5],0,7,14))