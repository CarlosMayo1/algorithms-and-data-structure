// Exercise #16
// Chunk Monkey

function chunkArrayInGroups(arr, size) {
  const chunk = [];
  for (let i = 0; i < arr.length; i += size) {
    chunk.push(arr.slice(i, size + i));
  }
  return chunk;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
