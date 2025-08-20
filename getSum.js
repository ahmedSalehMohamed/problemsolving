const getSum = (arr1) => {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum = sum + arr1[i];
  }
  return sum;
};
module.exports = { getSum };
