// Excercise #12
// Slice and splice

function frankenSplice(arr1, arr2, n) {
  // solution 01
  const localArray = arr2.slice();
  localArray.splice(n, 0, ...arr1);
  return localArray;
}

function frankenSplice(arr1, arr2, n) {
  // solution 02
  const localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
