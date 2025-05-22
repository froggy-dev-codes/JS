// versionado de un proyecto

// projet zombiud v- 1 . 0 . 0
/* 

1 -version estable """"""""""""
0 - agregar funcionalidad que sirve con la version actual
0 - arreglar bugs de la version actaul
*/


// 1.0.0
function sumar (a, b){
    return (a + b)
}

console.log(sumar());


// no sirve , arreglaro etc
//  1.0.1
function sumar (a=0, b=0){
    return (a + b)
}

console.log(sumar(54, "rene"));

// no sirve , arreglaro etc
// 1.0.2
function sumar (a=0, b=0){

    if ((typeof(a) == "number") && (typeof(b) == "number")){
        return (a + b)
    }

    return ("los dos valores deven ser numericos")
}

console.log(sumar(54, 7, 58));

// no sirve , arreglaro etc
//  implentar una funcionalidad que sirva conla version actual

// 1.1.2
function sumar (a=0, b=0, ...otros){

    if (Array.isArray(otros)){
        return (otros.reduce((total, actual) => total + actual, 0))
    }


    if ((typeof(a) == "number") && (typeof(b) == "number")){
        return (a + b)
    
    }

    return ("los dos valores deven ser numericos")
}

console.log(sumar([1,1,1,2,5,4,1,2,45,4,1,2]));


// ----------------------------
// 2.0.0
function sumar (otros){

    if (Array.isArray(otros)){
        return (otros.reduce((total, actual) => total + actual, 0))
    }
}

console.log(sumar([1,1,1,2,5,4,1,2,45,4,1,2]));