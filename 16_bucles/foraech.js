let arr = [1,2,3,4,5,6,7,8,9];

// clasica
/* for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
 */

// metodo foreach (modifica el original)
arr.forEach((elemento) => {
    console.log(elemento)
})


// metodo map (retorna un nuevo arr)
let nuevo = arr.map(elemento=> elemento * 2);

console.log(nuevo);
console.log(arr);


