// Return the largest number in arrays

function largestOfFour(arr) {
  // Solutio 01
  const largest = [];
  for (let i = 0; i < arr.length; i++) {
    let maxValue = arr[i][0];
    for (let j = 1; j <= arr[i].length; j++) {
      if (arr[i][j] > maxValue) {
        maxValue = arr[i][j];
      }
      largest[i] = maxValue;
    }
  }
  return largest;
}

function largestOfFour(arr) {
  // Solutio 02
  return arr.map(function (item) {
    return item.reduce(function (prev, current) {
      return Math.max(prev, current);
    });
  });
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
