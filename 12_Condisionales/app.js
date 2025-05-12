// JS nivel medio o intermedio

let dato = false;

function esVerdad(dato) {
    if (dato) {
        console.log("es verdadero");
    } else {
        console.log("es falso");
    }
}

esVerdad(dato);

// -----------------------------------

let edad = 1000;

if (edad >= 0) {

    if (edad < 18) {
        console.log("soy menor de edad");
    
    } else if (edad <= 25) {
        console.log("soy adolescente");
    
    } else if (edad <= 40) {
        console.log("soy adulto");
    
    } else if (edad <= 100){
        console.log("soy tercera edad..");

    } else {
        console.log("nadie vive tanto");
        
    }
}
