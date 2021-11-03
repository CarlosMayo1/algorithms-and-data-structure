// Exercise #7
// Repeat a string

function repeatStringNumTimes(str, num) {
  // Solution #1
  return str.repeat(num);
}

function repeatStringNumTimes(str, num) {
  // Solution #2
  const newArr = [];
  for (let i = 0; i < num; i++) {
    newArr.push(str);
  }
  return newArr.join("");
}
