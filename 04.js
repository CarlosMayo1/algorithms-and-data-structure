// Finding the logest word in a string
function findLongestWordLength(str) {
  // Solution #01
  let longest = 0;
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest) {
      longest = words[i].length;
    }
  }
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

function findLongestWordLength(str) {
  // Solution #02
  return str.split(" ").reduce(function (longest, word) {
    return Math.max(longest, word.length);
  }, 0);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
