// paso por valor o por referncia

// paso por valor
/* 
color = 124587bh
fruta = 1354sdfs
*/
let color = "naranja";
let fruta = color;

console.log(color);
console.log(fruta);

fruta = "manzana";
console.log(color);
console.log(fruta);


// paso por referencia
/* 
arr = 123456789
copia = 123456789
*/
let arr = [1,2,3,4,5,6];
let copia = arr;

console.log(arr);
console.log(copia);

copia.push("nuevo valor");
console.log(copia);
console.log(arr);