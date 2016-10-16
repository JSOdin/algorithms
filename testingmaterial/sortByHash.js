function sortByHash(A){
    var p = [];
    var hash = {};
    var l = A.length;
    for (var i=0; i<l;i++){
        p[i] = ~~(Math.random() * Math.pow(l,4));
        hash[A[i]] = p[i];
    }
    console.log(A);
    console.log(p);
    console.log(hash)
    A.sort(function(a,b){
        return hash[a]-hash[b];
    });
}

var arr = [3,5,2,3,4,52,15,155,2,3,6,25];
sortByHash(arr);

console.log(arr);