// Existen los operadores aritméticos + - * / % (módulo)

let x = 22
let nombre ='Pepe'
let z = '2'

//let division = 10 / 2
let division = x / z

console.log(division)
console.log(typeof z)

// NaN (Not a Number) Cualquier cadena de caracteres que no se puede interpretar como un número
division = x / nombre
console.log(division)
console.log(0/0)
console.log(1/0)
console.log(-1/0)

/* NaN equivale al concepto matemático de indeterminación

0 / n = 0
n / 0 = infinto
0 / 0 = NaN

*/


// Si quiero evitar indeterminaciones debo validar los datos

function dividir (x, y) {
    if ( isNaN(x) || isNaN(y) ) {
        console.log('Operadores inválidos')
        return
    }
    console.log('La división da', x / y, '€')
}

dividir(x,z)
dividir(x,nombre)

// Si hay strings tiene preferencia la concatenación

console.log(x + z)
// Para evitarlo tenemos que forzar el casting.
/* Aquí concatena en vez de realizar la suma porque uno de los valores es un string. 
Como hay casting y el concatenado tiene prevalencia sobre la suma. */

console.log( parseFloat(x) + parseFloat(z) ) // A toda variable que no tenga la seguridad de que es del tipo dato, le forzamos a que los interprete como números.
console.log( Number(x) + Number(z) )
console.log(+x + +z)

console.log(typeof z)