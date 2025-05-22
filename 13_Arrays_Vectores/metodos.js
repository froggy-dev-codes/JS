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


// metodo sort (string) 
let desorden = [ 4, 5 , 7 , 9 , 2 , 3 , 1, 10 ,11, 100, 200, 300, 255,];
console.log(desorden);
console.log(desorden.sort());
console.log(nombre);
console.log(nombre.sort());


// metodo join 
let arrPalabras = ["hola", "otra", "mas cosas", 5, 8, 9, true];
console.log(arrPalabras);
let nuevaCadena = arrPalabras.join(" ");
console.log(nuevaCadena);

// metodo split (String)
console.log(nuevaCadena);
console.log(nuevaCadena.split(" "));


// metodo slice
console.log(arrPalabras);
console.log(arrPalabras.slice(0, 3));


// metodo every 
let arrEdad = [12, 15, 7, 4, 10, 11];

let menores = (edad) => (edad <= 18);

let respuesta = arrEdad.every(menores);
console.log(respuesta);

//  metodo find
let animales = ["perro", "gato", "tapir", "serpiente", "awawa", "tapir"];

let valor = "tapir";
let retorno = animales.find(function(dato){
    return (dato.includes(valor));
})

console.log(retorno);


// metodo filtro
let arrnumeros = [1,2,4,5,7,8,9,63,2,1,4,5];

let arrFiltrado = arrnumeros.filter((elemento)=> {
    return (elemento%2 == 1);
}) 
console.log(arrFiltrado);



// metodo reduce
console.log(arrnumeros);
let arrRedeuce = arrnumeros.reduce(function (acomulador, valoractual){
    return (acomulador + valoractual)
})
console.log(arrRedeuce);












