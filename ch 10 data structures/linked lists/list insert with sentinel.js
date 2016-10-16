function Node(value) {
    this.key= value;
    this.previous = null;
    this.next = null;
}

function DoublyList() {
    this._length = 0;
    this.head = null;
    this.tail = null;
}


function listInsert(L,x){
    x.next = L.nil.next;        // we insert the new element to the front in front of the current head. L.nil.next is the head, so the old head becomes .next of the new head, x.
    L.nil.next.prev = x;       // the old head's prev is our new element x.
    L.nil.next = x;            // we adjust our sentinel L to accomodate the new element (the new current head.)
    x.prev = L.nil;            // set the prev on our new element.
}