function PERMUTE(A){
    var n = A.length;
    var p = [];
    for (var i=0; i<n;i++){
        p[i] = ~~(Math.random()*Math.pow(n,3));
    }

    var hash = {};

    for (var j=0; j<A.length;j++){
        hash[A[j]] = p[j];
    }

    A.sort(function(a,b){
        return hash[a] - hash[b];
    });

}

var A = [5,6,1,4,3]

PERMUTE(A);

console.log(A);