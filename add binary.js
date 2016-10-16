/*
// iterating backwards

function addBinary(a,b){
    var arr=[]; var carryOver = 0;
    for (var i= a.length-1;i>=0;i--){
        arr[i] = (carryOver + (a[i]+b[i]))%2;
        carryOver = Math.floor((carryOver+a[i]+b[i])/2);
    }
    arr.unshift(carryOver)
    return +arr.join('');
}

console.log(addBinary([0,1,1,1],[1,1,1,1]));

*/

// iterating from 0 to length-1 by reversing each array (binary starts from the right side)

function addBinary(a,b){
    a = a.reverse();
    b = b.reverse();
    var carryOver = 0,
        arr = [];

    for (var i=0; i< a.length;i++){
        arr.push((carryOver+a[i]+b[i])%2);
        carryOver = Math.floor((carryOver+a[i]+b[i])/2);
    }
    arr.push(carryOver);

    return +arr.reverse().join('');
}

console.log(addBinary([0,1,1,1],[1,1,1,1]))