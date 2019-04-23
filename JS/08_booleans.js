/* if(condicion) {
    // codigo
}

if(condicion) {
    // codigo A
} else {
    // codigo B
}

if(condicion) {
    // codigo A
} else if (condicion2) {
    // codigo B
} else {
    // codigo C
} */

let x = 3
x = 5
x = '3'

// Comparación igual ==
// Comparación idéntico (en valor y tipo) ===
// Comparación distinto != (sólo tiene en cuenta el valor)
// Comparación no-idéntico !== (tiene en cuenta ambas cosas)

if( x = 3 ) {
    console.log('Es correcto')
} else {
    console.log('Es un árbol de nísperos')
}

// Casting a boolean
// Valores falsy -> false

x = false
x = undefined
x = ''
x = NaN
x = 0

// Valores truly -> true
x = true
x = 25
x = 'Pepe'
x = {}
x = []
x = function () {}

if(x) {
    console.log('Es verdadero')
} else {
    console.log('Es falso')
}