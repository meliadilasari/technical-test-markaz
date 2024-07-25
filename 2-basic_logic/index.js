function hashTriangle(x) {
  let result = "";
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < x; j++) {
      j + i >= 2 ? (result += "#") : (result += " ");
    }
    if (i !== x - 1) result += "\n";
  }
  return result;
}

console.log(hashTriangle(3));
