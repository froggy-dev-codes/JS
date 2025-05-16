/* 
crear un programa que 
me elimine todas las vocales de una cadena de texto
y me muestre por conosla la cadena nueva sin vocales
*/

let cadena = "EstamOs aprendIendo logica en JS";
cadena= cadena.toLowerCase(cadena);
let vacia = "";

for (let i =0; i < cadena.length; i++){

    switch(cadena[i]){
        case 'a':

        case 'e':

        case 'i':

        case 'o':

        case 'u':
            continue;
            break;
    }

    vacia += cadena[i]
}

console.log(vacia);