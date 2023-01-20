module.exports =function check(str, bracketsConfig) {
  //   // your solution
  const steсk = [];
  const brackets = {};
  let start = "";
  let end = "";
  let last = "";
  bracketsConfig.forEach((elem) => {
    brackets[elem[1]] = elem[0];
  });
  bracketsConfig.forEach((element) => {
    start += element[0];
    end += element[1];
  });

  for (let i = 0; i < str.length; i++) {
    if (start.includes(str[i]) && !end.includes(str[i])) {
      steсk.push(str[i]);
      continue;
    }
    if (start.includes(str[i]) && end.includes(str[i])) {
      if (str[i] === steсk[steсk.length - 1]) {
        steсk.pop();
        continue;
      } else {
        steсk.push(str[i]);
        continue;
      }
    }
    if (end.includes(str[i])) {
      last = steсk.pop();
    }

    if (brackets[str[i]] != last) return false;
    console.log(steсk);
  }
  return !steсk.length;
}
// const str1 = '111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222'
// const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
// const config4 = [['|', '|']];
// const config5 = [['(', ')'], ['|', '|']];
// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
// console.log(check(str1, config6))
