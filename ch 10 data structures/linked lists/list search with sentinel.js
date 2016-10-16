// searching for element in L that has k as its key.
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
    var x = L.nil.next;             // start with the first element 
    while (x != L && x.key != k){ 
        x = x.next;
    }
    return x;
}