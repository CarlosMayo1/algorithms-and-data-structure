// Factorilize a Number

function factorialize(num) {
  // Solutio #01
  let factorialized = 1;
  for (let i = 1; i <= num; i++) {
    factorialized *= i;
  }
  return factorialized;
}

factorialize(5);
