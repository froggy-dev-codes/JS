/* 
el obj Math es statico por ende siempre se debe utilizar su nombre antes de utilizarlo
tambien tiene propiedad y metodos 
para resolver ecuaciones matetmaticas avanzadas 
*/

// PI
let numeroPI = Math.PI;
console.log(numeroPI);

// metodo toFixed redondeo de decimales redondeados
console.log(typeof(numeroPI.toFixed(2)));
console.log(numeroPI.toFixed(3));

// metdo round 
console.log(Math.round(numeroPI));
console.log(Math.round(3.5));

// metodo ceil
console.log(Math.ceil(3.1));

// meteodo floor
console.log(Math.floor(3.9));

// metodo trunc
console.log(Math.trunc(3.458476478));

// Metodo abs 
let valor = -78;
console.log(Math.abs(valor));

// metodo potencia pow
console.log(Math.pow(2, 2));
console.log(2 ** 3);

// metodo sqrt
console.log(Math.sqrt(9));


// metodo ramdom (0.0 --- 0.99999999999)
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.trunc(Math.random() * 30));         







