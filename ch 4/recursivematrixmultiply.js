console.time('timerName');
function recursivematrix(A,B){
    var n = A.length;
    var C = [];

    if (n == 1){
        C[0] = [];
        C[0][0] = A[0][0]*B[0][0];

    } else {
        var a00b00 = recursivematrix(submatrix(A,0,n/2,0,n/2),submatrix(B,0,n/2,0,n/2));
        var a01b10 = recursivematrix(submatrix(A,0,n/2,n/2,n),submatrix(B,n/2,n,0,n/2));

        var C00 = matrixAdd(a00b00,a01b10);

        var a00b01 = recursivematrix(submatrix(A,0,n/2,0,n/2),submatrix(B,0,n/2,n/2,n));
        var a01b11 = recursivematrix(submatrix(A,0,n/2,n/2,n),submatrix(B,n/2,n,n/2,n));

        var C01 = matrixAdd(a00b01,a01b11);

        var a10b00 = recursivematrix(submatrix(A,n/2,n,0,n/2),submatrix(B,0,n/2,0,n/2));
        var a11b10 = recursivematrix(submatrix(A,n/2,n,n/2,n),submatrix(B,n/2,n,0,n/2));

        var C10 = matrixAdd(a10b00,a11b10);

        var a10b01 = recursivematrix(submatrix(A,n/2,n,0,n/2),submatrix(B,0,n/2,n/2,n));
        var a11b11 = recursivematrix(submatrix(A,n/2,n,n/2,n),submatrix(B,n/2,n,n/2,n));

        var C11 = matrixAdd(a10b01,a11b11);

        C = C00.map(function(ea,i){return ea.concat(C01[i])}).concat(C10.map(function(ea,i){return ea.concat(C11[i])}))
    }
    return C;
}

function submatrix(M,ls,le,ss,se){
    var rows = [];

    for (var i=ls, j=0; i<le;i++,j++){
        rows[j] = M[i].slice(ss,se);
    }

    return rows;
}

function matrixAdd(A,B){
     return A.map(function(ea,i){
        return ea.reduce(function(a,b,j){
            return a.concat(b+B[i][j]);
        },[])
    })
}


var arrA = [];

for (var i=0; i<64; i++){
    var subarr = [];
    for (var j=1; j<=64; j++){
        subarr.push(j);
    }
    arrA.push(subarr);
}
var arrB = arrA.slice();
recursivematrix(arrA, arrB);
console.timeEnd('timerName');