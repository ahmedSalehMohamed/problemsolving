const numberOfVowels=(str)=>{
	str=str.toLowerCase();
    vowelCount=0;
    const vowelChars =['a','o','i','u','y'];
      for(let i =0;i<str.length;i++){
            if(vowelChars.includes(str[i])){
                  vowelCount+=1;
                                                }
};
return vowelCount;

}

module.exports={numberOfVowels}