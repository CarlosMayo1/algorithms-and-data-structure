// Exercise #14
// Where do I belong

function getIndexToIns(arr, num) {
  // Solution #1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      return i;
    }
  }
  return arr.length;
}

function getIndexToIns(arr, num) {
  // Solution #2
  return arr.filter((n) => num > n).length;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
