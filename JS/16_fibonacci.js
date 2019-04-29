/**
 * Programa para calcular los nº de la serie Fibonacci por de un valor dado (incluido).
 * 
 * Partiendo de 0 y 1, cada elemento de la serie se calcula como la suma de los 2 anteriores.
 * 
 */

 /**
  * Function fibonacci
  * @param limite: number
  * @returns: array[number]
  * 
  */

  function fibonacci (limite) {
      let i = 0 
      let j = 1
      let serie = [i]

      while (j <= limite) {
          let next = i + j
          //serie[serie.length] = 
           // Sirve para agregar algo al final del array
          i = j
          j = next // Con esto movemos dos posiciones los valores de i y de j
          serie.push(i)
      }
      /* for (let k = 0; k < Infinity; k++) {
          const element = array[k];
          if () {
              // continue // Se salta una vuelta pero sigue con la siguiente
              break // Este se sale del bucle. Se sale de la iteración. Es una alternativa para salirse de un bucle infinito.
          } */
      return serie
}


/**
 * Function fibonacciFor
 * @param limite: number
 * @returns : array[number]
 * 
 */

 function fibonacciFor(limite) {

    let i = 0
    let j = 1
    let serie = [i]

  /*   for (let index = 0; index < 12; index++) {
        let next = i + j
        i = j
        j = next
        serie.push(i)
        if (i > limite) {
            break
        }
    } */

let next
for (let i = 0, j = 1; i < limite; i = j, j = next) {
    serie.push(j)
    next = i + j
}

    return serie
     
 }

  let limite = 8
  console.log(fibonacciFor(limite))