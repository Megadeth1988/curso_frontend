/**
 * Presentar los nº primos del 1 al N
 */

 /**
  * Function isPrimo
  * @param num: number
  * @returns: boolean
  */

  function isPrimo(num) {
      let r = true
      // if (num == 0) Esta es la manera intuitiva de ponerlo, pero no es la adecuada
      if (!num) {
          return false
      }
      for (let i = 2; i < num ; i++) {
          // console.log('i resto', num % i)
          // if (num % i == 0) {
              if ( !(num % i ) ) {
              // NO primo
              return false
          }
      }

      return r
  }

  let number = 0
  number = 1
  number = 2
  number = 3
  number = 4
  number = 21
  // number = 22
  // number = 17
  // isPrimo(number)
  console.log(isPrimo(number))

  /**
   * Function listaPrimos
   * @param limite: number
   * @returns: array[number]
   */

   function listaPrimos(limite) {
       let primos = []
       for (let i = 0; i <= limite; i++) {
           if (isPrimo(i)) {
               // primos[primos.length] = i
               primos.push(i) // Esto agrega un nº a la lista de primos del array
           }
       }
       return primos
   }
   
   console.log('Los primos son', listaPrimos(200).join(', ')) // Join coge un array y lo muestra como un string