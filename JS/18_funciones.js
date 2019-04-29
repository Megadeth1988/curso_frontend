/**
  * Función declarada
  * Existe "hoisting" (alzamiento)
  * */

function suma(x = 0, y = 0) {
    return x + y
}

/**
 * Función asignada
 * 
 * Una función es un dato de tipo objeto (Esto es lo que hace de JS un lenguaje funcional, es decir, aquellos que consideran las funciones como elementos intrínsecos del lenguajes)
 * 
 */

 let obj = {}
 let resta = function (x = 0, y = 0) {
     return x - y
 } // Esta función es anónima


 /**
  * En ES6 aparecen las arrow (=>) function 
  */

  /* let producto = function (x = 1, y = 1) {
      return x * y
  } */

  //let producto = (x = 1, y = 1) => {return x * y}
  let producto = (x = 1, y = 1) => x * y //Esto es lo mismo que lo de más arriba, cuando sólo hay una línea de código se pueden quitar las llaves y el return al otro lado del operador arrow (=>)

  // let cuadrado = (x) => x * x
  let cuadrado = x => x * x // Manera condensada de poner una function

 console.log(suma(4,6))
 console.log(resta(6,3))
 console.log(producto(4,7))
 console.log(cuadrado(6))