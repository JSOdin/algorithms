console.time('timerName');
function matrixmultiply(A,B){
    var c = [];
   for (var i=0; i< A.length;i++){

       var arr = [];
       for (var j=0; j< B[0].length;j++){
           // for each column of B

           var sum = 0;
           for (var k=0; k<A[i].length; k++){
               // sum A and B elements here
               sum = sum+ A[i][k]*B[k][j];
           }
           arr.push(sum);
       }

       c.push(arr);
   }

    return c;
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

matrixmultiply(arrA,arrB)
console.timeEnd('timerName');