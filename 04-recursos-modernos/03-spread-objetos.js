const a = [1, 2, 3];
const b = [4, 5, 6];

const numeros = [...a, ...b];

console.log(numeros);
// [1, 2, 3, 4, 5, 6] ...a, ...b
// [[1, 2, 3], [4, 5, 6]] a, b