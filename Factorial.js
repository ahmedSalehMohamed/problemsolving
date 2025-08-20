const Factorial=(n)=>{
	if(n<=0){return 1}
	let Fact=1;
for(let i =1;i <=n;i++){
Fact*=i ;
  } 
  return Fact;
}
module.exports={Factorial}



// using recursion 
/* function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  if (n === 0 || n === 1) {
    return 1; // base case
  }
  return n * factorial(n - 1); // recursive step
}*/ 