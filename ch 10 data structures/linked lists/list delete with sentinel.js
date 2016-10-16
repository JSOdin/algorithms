// with a dummy sentinel object that links the list head and tail, the list becomes doubly linked and circular, eliminating the need for boundaries
// a list L would have a L.nil property. any reference to null in the list would be replaced by a reference to this L.nil with prev and next properties, but no key.

// both the prev attrib of the head and next attrib of the tail point to L.nil.
// with the L.nil sentinel we no longer need the properties L.head or L.tail.

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


function listDelete(L,x){
    x.prev.next = x.next;
    x.next.prev = x.prev;
}

