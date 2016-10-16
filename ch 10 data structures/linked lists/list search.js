// finds the first element with the key k in list L, and returns the pointer to this element. else returns null

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


function listSearch(L,k){
    var x = L.head;

    while (x != null && x.key != k){
        x = x.next;
    }

    return x;
}