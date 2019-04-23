function suma(x,y) { // Esta es una función pura porque solo utiliza del exterior los valores que se le suministran como parámetros. Y siempre que le proporcionemos los mismo valores nos va a devolver el mismo resultado.
    let r = x + y /* Esta es una variable local a la función */
    return r
    /* return x + y */ //Con esto le estamos diciendo que nos devuelva la suma de las dos variables
}

function mostrar(texto) {
    console.log(texto)
}

let number1 = 23 /*Esta variable es global al programa y mientras que se esté ejecutando va a tener este valor.*/
let number2 = 20 /* Estas dos son variables internas */
/* console.log(r) esto daría un error */
let result = suma(number1, number2)
mostrar(result)

// No se cumple la separación de intereses (concerns). Este es un principio de toda la programación.

function sumarMal(x,y) {
    let r = x + y
    console.log(r)
}

sumarMal(2,5)