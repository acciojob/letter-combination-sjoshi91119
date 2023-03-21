if (input_digit.length == 0) {
    var arr = [];
    arr.push("");
    return arr;
  }
  let fd = input_digit[0];
  let ans = [];
  let ros = input_digit.substring(1);
  let str = obj11[fd];
  for (let i = 0; i < str.length; i++) {
    let fc = str[i];
    let smallans = letterCombinations(ros);
    for (var val of smallans) {
      let smans = fc + val;
      ans.push(smans);
    }
  }
  return ans;