let dato, valor = require("./exportando/app");

// crea un obj que tenga la propiedad que te llego
// y a esa propiedad dale el valor de "anonimo"


// dot notation (notacion del punto)
let persona = {};
console.log(persona);
persona.dato = "anonimo";
console.log(persona);


// Bra–ket notation (cuando el valor me llegue de manera anonima)
persona[dato] = "anonimo";
console.log(persona);

// -----------------
// se puede
persona.edad = valor;
console.log(persona);



