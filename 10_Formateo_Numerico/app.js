// formateo numerico
let numero = Math.PI; //3. 141
console.log(numero);

function formateo (arg){

    let cadena,
        punto,
        numeroNuevo
        
    
        cadena = arg.toString(); // convertir a texto
        punto = cadena.indexOf("."); // buscar si existe un . 1
        cadena = cadena.slice(0, (punto + 4)); //recortamos el tex (0 , 5 )
        numeroNuevo = Number(cadena); // covertirlo en numero 
        return(numeroNuevo)

}
console.log(formateo(numero));

