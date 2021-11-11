// Exercise #15
// Mutation

function mutation(arr) {
  // Solution #1
  const target = arr[1].slice().toLowerCase();
  const word = arr[0].slice().toLowerCase();

  for (let i = 0; i < target.length; i++) {
    if (word.indexOf(target[i]) < 0) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
