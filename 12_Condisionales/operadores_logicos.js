/* 
compuertas logicas 
Y = && = and  todos sus valores deben ser v para v
o = || = or  si minimo un valor es v su salia es v
not = ! = invertir el valor de salida 
*/

// ejemplo de and
let edad = -1;
if ( (edad > 0) && (edad < 18) ){
    console.log("soy menor de edad");
    
} else {
    console.log("nadie tiene menos de 0");
    
}


// ejemplo con or 
let boletoFisico = false;
let boletoQR = true;

if ((boletoFisico) || (boletoQR)) {
    console.log("Puede entrar al cine");
} else {
    console.log("No puede entrar al cine");
}


