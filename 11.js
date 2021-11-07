// Exercise #11
// Title case
function titleCase(str) {
  // Solution 01
  const words = str.split(" ");
  const capitalized = [];
  for (let i = 0; i < words.length; i++) {
    capitalized.push(
      words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
    );
  }
  return capitalized.join(" ");
}

function titleCase(str) {
  // Solution 02
  return str
    .split(" ")
    .map((item) => {
      return item[0].toUpperCase() + item.slice(1).toLowerCase();
    })
    .join(" ");
}

titleCase("I'm a little tea pot");
