/* hace run programa que lea un numero 
y determine si es par o nones */

function identificar(par) {

    let numero = par;

    if (numero < 0) {
        if (numero % 2 == 0) {
            return (("soy PAR pero Negativo"));

        } else {
            return (("soy Impar pero Negativo"))
        }

    } else if (numero > 0) {
        if (numero % 2 == 0) {
            return (("soy PAR pero Positivo"));

        } else {
            return (("soy Impar pero Positivo"))
        }

    } else if( numero == 0){
        return ("soy cero")
    }
}

console.log(identificar(2));
console.log(identificar(3));
console.log(identificar(45));
console.log(identificar(44));
console.log(identificar(-44));
console.log(identificar(0));
