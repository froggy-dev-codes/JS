class Lista {
    constructor() {

        // el constructor
        this.item = [];
    }
    // metodo de agregar
    agregar(elemeto) {
        this.item.push(elemeto);
    }
    // crear metodo de ver 
    mostrar() {
        console.log(`lista: ${this.item}`);
    }
}



// instanciar una obj nueva
let agregarNuevoElemento = new Lista();
console.log(agregarNuevoElemento);
agregarNuevoElemento.agregar("luza");
agregarNuevoElemento.mostrar();
console.log(agregarNuevoElemento);