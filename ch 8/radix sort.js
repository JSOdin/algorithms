console.time('timer');
function radixSort(A,d){
    var stage=[];
    for (var i=0; i<d; i++){
        countSort(A,stage,i);
        A = stage.slice();
        stage=[];
    }
    return A;
}

function countSort(A,B,d){
    var length = A.length;
    var k = -Infinity;
    var target = A.map(function(ea){
        var str = ea.toString();
        return +(str.charAt(str.length-1-d));
    });

    for (var b=0; b< length;b++){
        if (target[b] > k){
            k = target[b];
        }
    }

    var C = [];

    for (var i=0; i<=k;i++){
        C[i] = 0;
    }

    for (var j=0; j< length;j++){
        if (target[j]){
            C[target[j]]++;
        }
    }

    for (var l=1; l<=k;l++){
        C[l] = C[l]+C[l-1];
    }

    for (var h = length-1; h>=0; h--){
        B[C[target[h]]-1] = A[h];
        C[target[h]]--;
    }
}

var arr =  [35, 25, 53, 3, 102, 203, 230, 1005];

for (var i=1; i<=9000000; i++){
    arr.push(~~(Math.random()*6001));
}
radixSort(arr,4)
console.timeEnd('timer');



