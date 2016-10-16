function sortByAnotherArray(Arr){
    var p = [];
    var l = Arr.length;
    var hash = {};
    for(var i=0; i<l;i++){
        p[i] = ~~(Math.random() * Math.pow(l,3));
        hash[p[i]] = Arr[i];
    }

    for (var j=0; j<p.length;j++){
        var currP = p[j];
        var currA = Arr[j];
        var k = j-1;

        while (k>=0 && p[k] > currP){
            p[k+1] = p[k];
            Arr[k+1] = Arr[k];
            k--;
        }
        p[k+1] = currP;
        Arr[k+1] = currA;
    }
    console.log(p);
    console.log(hash);
}

var arr = [5,24,35,255,1,4,3,5,2,255,15,26,222,35,24];

sortByAnotherArray(arr);

console.log(arr);