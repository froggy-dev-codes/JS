// vamos a acrear un programa que agregue elementos en una clase

// crear la palntilla de la clase 
function Lista(){

    // el constructor
    this.item = [];
}

// metodo de agregar
Lista.prototype.agregar = function(elemeto){
    this.item.push(elemeto);
}

// crear metodo de ver 
Lista.prototype.mostrar = function(){
    console.log(`lista: ${this.item}`);
}

// instanciar una obj nueva

let agregarNuevoElemento = new Lista();
console.log(agregarNuevoElemento);
agregarNuevoElemento.agregar("luza");
agregarNuevoElemento.mostrar();
console.log(agregarNuevoElemento);


