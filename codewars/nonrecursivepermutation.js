function ps(a){
    var res = [[]];

    for (var i=0; i<a.length; i++){
        while(res[res.length-1].length == i){
            var l = res.pop();
            for (var j=0; j<=l.length; j++){
                var copy = l.slice();
                copy.splice(j,0,a[i]);
                res.unshift(copy);
                console.log(res, ' i is '+i, ' j is '+j);
            }
        }
    }
    return res;
}

ps([1,2,3,4])