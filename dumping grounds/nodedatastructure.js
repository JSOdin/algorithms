

function reverse(head) {
    // Your code goes here.
    var obj = {};

    var traverse = function(node){
        if (node !== null){
            obj.next = obj.data ? JSON.parse(JSON.stringify(obj)) : null;
            obj.data = node.data;
            traverse(node.next);
        }
    };

    traverse(head);

    return head ?  obj : null;
}

var nodes = {data:6,next:{data:4,next:{data:1,next:null}}};

console.log(reverse(nodes));