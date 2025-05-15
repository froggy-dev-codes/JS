let obj = {
    nombre : "froggy",
    edad : 12500,
    mascotas: ["perro", "gato", "conejo", "capibara"],
    notas: {
        nota1: 45,
        nota2: 0,
        nota3: 87
    },

    saludar : function(){
        return ("hla")
    }
}

console.log(obj);

console.log(obj.notas.nota3);
console.log(obj.mascotas[2]);
console.log(obj.saludar());

// los JSON se copiaropn de los OBJ 


let otro = obj;
otro.enfermedad = "no tengo";
console.log(otro.enfermedad);
console.log(obj.enfermedad);
