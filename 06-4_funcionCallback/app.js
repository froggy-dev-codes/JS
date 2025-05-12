// callback una funcion que llama a otra funcion

function productos (art1, art2, funcion){

    let resultado = art1 + art2;
    funcion(resultado); //llamando funcion anonima
}

function mensaje(valor){
    console.log("el valor de los productos es "+ valor);
}

// llamarla 
productos(20, 15, mensaje);


// ----------------------------
// ----------------------------


// funcion callback con return 

function productos (art1, art2, funcion){

    let resultado = art1 + art2;
    return(funcion(resultado)) //llamando funcion anonima
}

function mensaje(valor){
    return("el valor de los productos es "+ valor);
}

// llamarla 
console.log(productos(20, 15, mensaje));

