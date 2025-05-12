// ultimo tema de JS bascio

// parseo de datos, conversion de datos, refundicion de datos
let valor = "124.535434";
console.log(typeof (valor));


// forma manual 
// convierta en numero entero, perdida de datos
let dato = parseInt(valor);
console.log(dato);
console.log(typeof(dato));

// convierte en numero flotante, no hay perdida de datos
let dato2 = parseFloat(valor);
console.log(dato2);
console.log(typeof(dato2));


// -----------------------
// -----------------------
// forma dinamica
let numero = "78.4643847";
let datoConvertido = Number(numero);
// let datoConvertido = +numero;
console.log(datoConvertido);
console.log(typeof(datoConvertido));



//  pasamos un valor numerico a tipo texto
let numeroGuardado = 57845.13;
console.log(typeof(numeroGuardado));
let numeroTexto = numeroGuardado.toString();
console.log(numeroTexto);
console.log(typeof(numeroTexto));























