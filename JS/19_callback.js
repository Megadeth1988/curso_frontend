/**
 * Las funciones son objetos (y tienen todas sus características)
 * Se pueden anidar
 * 
 */

 function operaciones(x = 1, y = 1) {
     console.log(suma(x, y))
     
     function suma(x, y) {
        return x + y
    }
 }


 operaciones (10, 12)

/*  function mostrar(texto) {
     console.log(`Hola ${texto}`)
 }

 let array = ['Pepe', 'Juan']
 for (let index = 0; index < array.length; index++) {
     const element = array[index];
     
 } */

 /**
 * Las funciones son objetos (y tienen todas sus características)
 * Se pueden pasar como parámetros = CALLBACK
 */

 function mostrarResultado(x = 0, y = 0, nombre, operacion) {
     // let x
     // let y
     // let operacion en vez de ser un 

     console.log(`El resultado de la ${nombre} con ${x} y ${y} es`)
     console.log(operacion(x,y))
 }

 // mostrarResultado(11, 12, function (x, y) {return x + y}) Esto es un callback típico
 mostrarResultado(11, 12, 'suma', (x, y) => x + y) // Esta es la manera más moderna de escribir JS
 mostrarResultado(11, 12, 'resta', (x, y) => x - y)
 mostrarResultado(11, 12, 'multiplicación', (x, y) => x * y)
 mostrarResultado(11, 12, 'división', (x, y) => x / y)
