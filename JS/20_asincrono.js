/**
 * La función setTimeout
 * permite un proceso asíncrono, diferido en el tiempo
 */

console.log('Primero')
// dentro de un rato
setTimeout( () => {
    console.log('Segundo')
},2000) // setTimeout te obliga a que le pases un callback
console.log('Tercero')