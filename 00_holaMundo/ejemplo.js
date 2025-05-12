/* 
vamos a crear un programa que me intercambi dos valores

x = 5
y = 10

x = 10
y = 5
*/

// declaracion de variables
let x = 5 , y = 10, aux;
console.log(x);
console.log(y);
console.log(aux);

// desarrollo del ejercicio

aux = x; // 5
x = y; // 10
y = aux; // 5
console.log(x);
console.log(y);
console.log(aux);