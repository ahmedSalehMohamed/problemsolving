const greatestCommonDivisor = (a, b) => {
  while (b !== 0) {
    let c = a % b;
    a = b;
    b = c;
  }
    return a;
};
module.exports = { greatestCommonDivisor };