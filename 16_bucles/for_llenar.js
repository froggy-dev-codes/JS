let arr = [];

for (let i =0; i< 10; i++){
    // [] acediendo de forma dinamica
    arr[i]= (Math.trunc(Math.random() * 10));
}
// console.log(arr);


// ---------------------------------------------
// declaramos la primera dimencion
let matriz = [];

for (let i = 0; i < 3; i++) {
    
    // declaramos la seguna dimencion
    matriz[i] = [];

    for (let j =0; j < 5; j++){

        matriz[i][j] = Math.trunc(Math.random()* 10)
        console.log(matriz[i][j]);
    }
    

}

console.log(matriz);
