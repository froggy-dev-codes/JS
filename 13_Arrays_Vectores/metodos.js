// metodos arr es inmutable  
let arr = [1,2,3,4,5];

// propiedad length
console.log(arr.length);

// mostrar todos los elemento
console.log(arr);
// arr[6] = "hola";


// arrays  = queue = filas


// metodos
// agregar un valor al final del arr metodo push
console.log(arr);
arr.push("hola");
console.log(arr);

// eliminar el ultimo valor metodo pop
console.log(arr);
let eliminado = arr.pop();
console.log(arr);
console.log(eliminado);


// elimina el primer valor metodo shift
console.log(arr);
let eliminandoPrimero = arr.shift();
console.log(arr);
console.log(eliminandoPrimero);


// agregar un valor al principio metodo unShift
console.log(arr);
let longitud = arr.unshift(0);
console.log(arr);
console.log(longitud);
console.log(arr.length);



// concatenar dos vectores en uno nuevo metodo concat
let arrNumero = [1,2,3,4,5];
let arrNumero2 = [6,7,8,9,10];
let arrNumero3 = arrNumero.concat(arrNumero2);
console.log(arrNumero3);


// metodo includes  lo que es busacar un elemento de vector
let nombre = ["luza", "carlos", "blanca", "keyles", "froggy"];
console.log(nombre);
console.log(nombre.includes("renee"));

// metedo indeOf() 
console.log(nombre);
console.log(nombre.indexOf("carlos"));
console.log(nombre.indexOf("blanca"));
console.log(nombre.indexOf("renee"));

// metodo reverse()
console.log(nombre);
console.log(nombre.reverse());









