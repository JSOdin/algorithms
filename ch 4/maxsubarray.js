function maxsubarray(arr,low,high){
    var maxleft, maxright, maxcross;
    if (high == low){
        return [low, high, arr[low]];
    } else {
        var mid = Math.floor((low+high)/2);
        maxleft = maxsubarray(arr,low,mid);
        maxright = maxsubarray(arr,mid+1,high);
        maxcross = maxsubcross(arr,low,mid,high);

        if (maxleft[2] >= maxright[2] && maxleft[2] >= maxcross[2]){
            return maxleft;
        } else if (maxright[2] >= maxleft[2] && maxright[2] >= maxcross[2]){
            return maxright;
        } else {
            return maxcross;
        }
    }
}

function maxsubcross(arr,l,m,h){
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

var arr = [0,-1,5,3,2,-3,-2,1,5,2,3,1,-4,-3,-5,1,-2,6,7,8,1];
console.log(maxsubarray(arr,0,arr.length-1))