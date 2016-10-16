var longestPalindrome=function(s){
    console.log(s);
    var currP ='';
    for (var i=0; i<s.length;i++){
        for (var j=i+1; j<s.length;j++){
            var slice = s.substring(i,j+1);
            var sl = slice.length;
            var iE = sl%2 == 0;
            var fh = slice.substring(0,Math.floor(sl/2));
            var sh = slice.substring(Math.floor(sl/2)+(iE?0:1)).split('').reverse().join('');
            if (fh==sh && slice.length > currP.length){
                currP = slice;
            }
        }
    }
    return s.length == 1 == currP.length ? 1 : currP.length;
}

console.log(longestPalindrome('dragonog'))