//En ES6 se utilizan let y const para declarar variables

let nombre //Esto es declarar la variable
nombre = 'Pepe' //Esto es inicializar la variable

let edad = 34 //Declarar e inicializar

// Tipos de datos

/* 
En otros lenguajes hay declaración EXPLICITA y OBLIGATORIA de tipos
int x -> variable x de tipo entero sin valor. Cuando tipos explícitos suele haber más tipos.

En JS los tipos son:
    - débiles: no se declaran explícitamente. Son IMPLÍCITOS al valor.
    - dinámicos: pueden cambiar. 
*/

// undefined. Son las variables que no tienen valor.
let data
console.log(data)
console.log(typeof data)

// A - DATAS Primitivos

//strings (cadenas de caracteres)
data = 'Hola amigos'
console.log(data)
console.log(typeof data)

// numbers
data = 35
console.log(data)
console.log(typeof data)

// booleans
data = true
data = false
console.log(data)
console.log(typeof data)

// B - DATAS referenciados

// object
data = { name: 'Pepe', age: 34}
console.log(data)
console.log(typeof data)

// object tipo array (subtipo). Son listas de valores
data = [23, 45, 78]
data = ['Lunes', 'Martes', 23, 78, true, undefined], {}
console.log(data)
console.log(typeof data)

function mostrar() {
    console.log(mostrar)
    console.lo(typeof mostrar)}