//  POO = programacin orientada a objetos
// POO = obj con esteroides 


// OBJ clasico
let persona = {
    nombre: "froggy",
    edad: 55
}

// POO  = funcion de clase (classs) / plantilla
function Persona3 (nombre, edad){

    // funcion cosntructora
    this.nombre = nombre;
    this.edad = edad;
}


// creacion de nuestro metodo 
Persona3.prototype.saludar = function(){
    console.log(`hola soy ${this.nombre} y tengo ${this.edad} años`);
}


// instanciar una clase 
let nuevoOBJ = new Persona3("froggy", 55);

nuevoOBJ.saludar();
console.log(nuevoOBJ);



// CLASS
class Mascotas {

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }


    // metod
    suludar(){
        console.log(`hola soy una mascota llamada ${this.nombre} y tengo ${this.edad} años`);
    }

}

// instancia una nueva clase
let gato = new Mascotas("fifi", 2);
gato.suludar();
console.log(gato);

let otroGato = new Mascotas ("kuro", 5);
otroGato.suludar();
console.log(otroGato);
