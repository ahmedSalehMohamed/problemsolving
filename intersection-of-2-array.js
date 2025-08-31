const intersection=(arr1,arr2)=>{
let intersect={};
let result=[];
for(let num of arr1){
if(intersect[num] !==undefined){ result.push(num)}
intersect [num]=true;
}
for(let num of arr2){
if(intersect[num] !==undefined){ result.push(num)}
intersect [num]=true;
}

return result;

}
module.exports={intersection};
  
    
    
    