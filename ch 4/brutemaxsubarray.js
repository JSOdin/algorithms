function brute(arr,low, high){
    var biggest= -Infinity;
    var indices;

    for (var i=low; i<=high;i++){
        var sum = 0;
        for (j=i;j<high;j++){
            sum = sum+arr[j];
            if (sum > biggest){
                biggest = sum;
                indices = [i,j];
            }
        }
    }
    return [biggest].concat(indices);
}

console.log(brute([6,2,-1,5,4,-2,4,-5,5,-3,15,-4],2,6))