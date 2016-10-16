console.time('timer')
function countingSort(A,B){   // A contains elements no larger than k.
    var C = [];  // mapping array that counts elements;
    var k = mathMax(A);
    for (var i=0; i<=k;i++){        // C will contain indices  0 to k
        C[i] = 0;
    }

    for (var j=0; j< A.length;j++){         // loop the entire length of A
        C[A[j]]++;  // accrue counts.
    }
    for (var l = 1; l<=k; l++){     // starts at 1 because C[0] has no elements before it.
        C[l] = C[l]+C[l-1];  // C[i] now contains number of elements less than equal to A[l]
    }

    for (var h= A.length-1;h>=0;h--){
        B[C[A[h]]-1] = A[h]; /// js is 0-index based
        C[A[h]]--;
    }
}

function mathMax(arr){
    var max=arr[0];
    for (var i=1; i<arr.length;i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

var arr =[];
for (var i=1; i<=90000000;i++){  // takes ~15s to complete for 90million items
    arr.push(~~Math.random()*6001);}
var B = [];

countingSort(arr,B);
console.timeEnd('timer');
// counting sort procedure goes as follows:

// 1) make a new Array C, of length k+1. k being the largest element of A.
//    C will keep track of element count to account for duplicate elements.
// 2) fill C will zeroes
// 3) loop the entire length of A to count elements.
// 4) manipulate C so that each member is a count of elements less than equal to i.
// 5) map C to  ea-1.
// 6) loop through A in reverse order.  C[A[h]] is how many of the same element there is in A, minus one. then B[C[A[h]]] is assigned as A[h].
// 7) we decide on positions of each A element by how many elements are less than or equal to that element in A.
// ** note. counting sort is STABLE: elements with same value appear in the output array in the same order as they do in the input array.
// ** this is important for sorting more complicated data, like an array of objects with a number identifier or other quantifiable measure.
// ** counting sort is used as a subroutine in radix sort.