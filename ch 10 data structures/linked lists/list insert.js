// inserting into front of the list (at the head)
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
    x.next = L.head;
    if (L.head != null){
        L.head.prev = x;
    }
    L.head = x;
    x.prev = null;
}