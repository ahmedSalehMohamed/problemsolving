const {greatestCommonDivisor}=require("./greatestCommonDivisor")
const leastCommonMultiple=(a,b)=>{
    return (a*b)/greatestCommonDivisor(a,b)
}
module.exports={leastCommonMultiple}