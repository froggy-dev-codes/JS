// introduccion a obj
let objPersonajes = {
    // llaves: valor
    // keys: value
    nombrePrimerpo: "froggy",
    "apellido segundo": "sparda",
    edad: 54
};

console.log(objPersonajes);

console.log(objPersonajes.nombrePrimerpo);
console.log(objPersonajes.edad);
console.log(objPersonajes["apellido segundo"]);

// agregar una nueva propiedad
objPersonajes.mascotas = true;
console.log(objPersonajes);
console.log(objPersonajes.mascotas);

// eliminar una propiedad
delete objPersonajes.edad;
console.log(objPersonajes);

// agregar 
objPersonajes.edad = 54;
console.log(objPersonajes.edad);
objPersonajes.edad = 78;
console.log(objPersonajes.edad);

console.log(`mi nombre es ${objPersonajes.nombrePrimerpo}`);


