const findPair=(nums, target)=> {
  let seen = {}; 

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (seen[diff] !== undefined) {
      return [seen[diff], i]; 
    }

    seen[nums[i]] = i; 
  }

  return [-1, -1]; 
}

console.log(findPair([2, 7, 11, 15], 9));