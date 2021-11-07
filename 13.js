// Excercise #13
// Falsy bouncer

function bouncer(arr) {
  // Solution 01
  return arr.filter((item) => {
    if (item !== "" || typeof item !== "boolean") {
      return item;
    }
  });
}

function bouncer(arr) {
  // Solution 01
  return arr.filter((item) => Boolean(item));
}

bouncer([7, "ate", "", false, 9]);
