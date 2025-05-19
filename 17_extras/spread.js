// operador spread (...)

// hacer una copia superficial de un OBJ (obj, arrays, string, class) tipos no primitivos

let arr = [1,2,3,4];
let nuevo = [...arr];

console.log(arr);
console.log(nuevo);
nuevo.push("nuevo");
console.log(nuevo);
console.log(arr);




