function createTriangle(x) {
  let result = "";
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < x; j++) {
      j + i >= x - 1 ? (result += "#") : (result += " ");
    }
    if (i !== x - 1) result += "\n";
  }
  return result;
}

console.log(createTriangle(3));
console.log(createTriangle(5));
