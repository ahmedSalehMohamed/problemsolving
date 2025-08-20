const nthFibonacci=(n)=>{
if(n<2) return n;
return nthFibonacci(n-1) + nthFibonacci(n-2);
}

const fibWithLoop =(n)=>{
    if(n<2) return n;
    let prev2=0;
    let prev1=1;
    let next;
    for(let i=2;i<=n;i++){
        next = prev1+prev2;
        prev2=prev1;
        prev1=next;
    }
    return next;

}


const fibWithCaching=(n,cache={})=>{
    if(n<2) return n;
    if(cache[n]) return cache[n]
    cache[n]=fibWithCaching(n-1,cache)+fibWithCaching(n-2,cache)
    return cache[n];
}





module.exports={nthFibonacci,fibWithLoop,fibWithCaching}







// F(n)=F(n-1)+F(n-2)
// f(4)=f(3)+f(2)
//  2= 1 +1 
