function findIndex(arr,item){
    var breakpoint = Math.ceil(arr.length/2);
    var part = item >= arr[breakpoint] ? arr.slice(breakpoint) : arr.slice(0,breakpoint);
    console.log(part);
    for (var i=0; i<part.length; i++){
        if (part[i] == item){
            return i;
        }
    }
}

console.log(findIndex([1,2,3,4,5,6,7,8,9],4));