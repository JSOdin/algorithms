function findIndex(arr,item){
   for (var i=0; i<arr.length; i++){
       if (arr[i] == item){
           return i;
       }
   }
    return null;
}

console.log(findIndex([1,6,4,2,3],3))