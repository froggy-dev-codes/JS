//  ES6
// destructuring desestructuracion


let arr = [1, 2 , "luza", true, "4578"];

let numero = arr[0];
console.log(numero);

// destructuriong arrays
let [dato, numero2, nombre4, ,indefinido] = arr;

console.log(dato);
console.log(numero2);
console.log(nombre4);
console.log(indefinido);


// destructuring con OBJ
let persona = {
    nombre: "froggy",
    edad: 1500
};

let {nombre, edad} = persona;
console.log(edad);
console.log(nombre);

