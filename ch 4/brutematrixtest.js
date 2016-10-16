function matrixmultiply(A,B){
    var c = [];
    for (var i = 0; i< A.length;i++){
        var subarr = [];
        for (var j=0; j< A.length;j++){
            var sum = 0;
            for (var k=0; k< B.length;k++){
                sum=sum+ A[i][k]* B[k][j];
            }
            subarr.push(sum);
        }
        c.push(subarr);
    }

    return c;
}

var A = [[2,3,4,5],[5,6,7,8],[6,7,8,1]];
var B = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]];

console.log(matrixmultiply(A,B))