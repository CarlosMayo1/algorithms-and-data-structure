// This is the second exercise
// Reverse a string

function reverseString(str) {
  // Solution #01
  return str.split("").revrse().join("");
}

function reverseString(str) {
  // Solution #02
  const reversedStr = [];
  for (let i = str.length; i >= 0; i--) {
    reversedStr.push(str[i]);
  }
  return reversedStr.join("");
}

function reverseString(str) {
  // Solution #03
  let reversedStr = "";
  str.split("").map((item) => {
    reversedStr = item + reversedStr;
  });
  return reversedStr;
}

reverseString("hello");
