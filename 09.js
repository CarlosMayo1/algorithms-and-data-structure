// Exercise 09
// Finders keepers

function findElement(arr, func) {
  // Solution 01
  let filteredElements = arr.filter((item) => func(item));
  return filteredElements.length > 0 ? filteredElements[0] : undefined;
}

function findElement(arr, func) {
  // Solution 02
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}
