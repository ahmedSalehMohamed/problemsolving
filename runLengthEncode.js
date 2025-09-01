const runLengthEncode = (s) => {
  let result = "";
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      result += s[i] + count;
      count = 1;
    }
  }

  return result;
};
module.exports = { runLengthEncode };