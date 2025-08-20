const reverseString=(str)=>{
  //  return str.split("").reverse().join("")
  let output=""
 for (let i=0;i<str.length;i++){
    let ch=str[i]
    output = ch + output
}
return output
}
module.exports={reverseString}