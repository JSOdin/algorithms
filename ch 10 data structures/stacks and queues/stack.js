function stackEmpty(S){
    return S.top <0;
}

function push(S,x){
    S.top = S.top+1;
    S[S.top] = x;
}

function pop(S){
    if (stackEmpty){
        return "underflow";
    }
    S.top = S.top-1;
    return S[S.top+1]
}