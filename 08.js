// Exercise 08
// Truncate a string

function truncateString(str, num) {
  // Solution 01
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }
  return str;
}

function truncateString(str, num) {
  // Solution 02
  return str.length > num ? str.slice(0, num) + "..." : str;
}
