//En ES6 se utilizan let y const para declarar variables

let nombre //Esto es declarar la variable
nombre = 'Pepe' //Esto es inicializar la variable

let edad = 34 //Declarar e inicializar

// Tipos de datos

// undefined. Son las variables que no tienen valor.
let data
mostrar(data)

//strings (cadenas de caracteres)
data = 'Hola amigos'
mostrar(data)

// numbers
data = 35
mostrar(data)

// booleans
data = true
data = false
mostrar(data)

// object
data = { name: 'Pepe', age: 34}
mostrar(data)

// object tipo array (subtipo). Son listas de valores
data = [23, 45, 78]
data = ['Lunes', 'Martes', 23, 78, true, undefined], {}
mostrar(data)

function mostrar(input) {
    console.log('El dato recibido es ',input)
    console.log('El tipo de dato es ', typeof input)
    console.log('-------------')
}

/* let mostrar = function mostrar(input) {
    console.log('El dato recibido es ',input)
    console.log('El tipo de dato es ', typeof input)
    console.log('-------------')
} */

mostrar(mostrar)