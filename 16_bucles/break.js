let salir = 10;


// imprima los numeors del 1 al 20, 10 rompa el bucle

let contador = null;

do {
    contador++;
    console.log(contador);

    if (contador == 10){
        console.log("saliendo del bucle");
        break;
    }
    
} while(contador != 20);