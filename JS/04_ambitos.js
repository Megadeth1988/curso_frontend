// Ámbitos o Scope de las variables

// Ámbito Global

let var1 = 20

// MUY MALA PRÁCTICA
// No se accede nunca a las variables globales desde las funciones
function prueba() {
    console.log(var1)
} // Declaración de la función

prueba() // Ejecución de la función


// Lo mismo con BUENAS PRÁCTICAS

let var2 = 30
pruebaBien(var2)



function pruebaBien (x) {
    console.log(x)
}



// Nuevo en ES6 usar let en lugar de var

function condicional() {
    let ext = 22
    if(true) {
        let data = 23
        console.log(ext)
        console.log(data)
    }
    console.log(ext)
    // console.log(data) daría un error
}

condicional()


let x = 12

function otraPrueba () {
    let x = 23
    // x = 23
    console.log('Dentro de la función x vale', x)
}

otraPrueba()
console.log('Fuera de la función x vale', x)