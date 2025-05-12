// paso por valor o por referncia 


// paso por referencia  [ajhsksd1]    [ajhsksd1]  punteros 
//  copiar un arr (mala practica)
let vector = [1,2,3,4];
let vectorCopia = vector;
console.log(vector);
console.log(vectorCopia);

vectorCopia.push("soy nuevo");
console.log(vectorCopia);
console.log(vector);


// copiar un arr (buenas practicas)

let arrNUmeros2 = [1,2,3,4,5];
console.log(arrNUmeros2);
let copiaNumero2 = [].concat(arrNUmeros2) ;
console.log(copiaNumero2);


let arrNUmeros = [1,2,3,4,5];
console.log(arrNUmeros);






//  utilzan paso por valor [asdfg78] [3447687dsfasdf]
let dato = 5;
let datoCopia = dato;
console.log(dato);
console.log(datoCopia);
datoCopia = "hola";

console.log(dato);
console.log(datoCopia);
