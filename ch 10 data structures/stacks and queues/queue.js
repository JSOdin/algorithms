function enqueue(Q,x){ // inserting items into queue
    Q[Q.tail] = x;
    if (Q.tail == Q.length-1){  // when there is no longer any room for the tail at the end (having reached the end of array)
        Q.tail = 0;             // wrap-around
    } else {
        Q.tail = Q.tail+1;
    }
}

function dequeue(Q){
    var x = Q[Q.head];
    if (Q.head == Q.length-1){
        Q.head = 0;             // wrap around if end of array.
    } else {
        Q.head = Q.head+1;
    }

    return x;
}