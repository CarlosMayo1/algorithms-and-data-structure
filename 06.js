// Exercise #06
// Confirming ending

function confirmEnding(str, target) {
  // Solution #1
  return str.endsWith(target);
}

function confirmEnding(str, target) {
  // Solution #2
  return str.slice(str.length - target.length) === target;
}

function confirmEnding(str, target) {
  // Solution #3
  return str.slice(-target.length) === target;
}
