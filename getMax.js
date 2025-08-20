const getMax=(arr2)=>{
    let max=0;
    for(let i=0;i<arr2.length;i++){
    if(max<arr2[i]){max= arr2[i];}
    }
    return max;
    }
    module.exports={getMax}