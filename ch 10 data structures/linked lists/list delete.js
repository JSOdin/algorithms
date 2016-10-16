// deleting an element from any position

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
    if (x.prev != null){
        x.prev.next = x.next;
    } else {
        L.head = x.next;
    }

    if (x.next != null){
        x.next.prev = x.prev;
    }
}

var first = {prev:null, key: 5, next:null};

var second = {prev:first, key: 5, next:third};

var third= {prev:second, key: 5, next:null};