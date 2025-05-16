/* 
crear un programa que 
me elimine todas las vocales de una cadena de texto
y me muestre por conosla la cadena nueva sin vocales
*/

let cadena = "EstamOs aprendIendo logica en JS";
cadena= cadena.toLowerCase(cadena);
let vacia = "";

for (let i =0; i < cadena.length; i++){
    console.log(cadena[i]);

    if ((cadena[i] === 'a') || (cadena[i] === 'e') || (cadena[i] === 'i')  || (cadena[i] === 'o') || (cadena[i] === 'u')) {
        continue;
    }

    vacia += cadena[i]
}

console.log(vacia);
