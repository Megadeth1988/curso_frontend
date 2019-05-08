/**
 * Programa que comprueba la letra de un DNI
 * La letra se asigna a partir de un array preestablecido,
 * seleccionando la posición correspondiente al resto del número entre 23
 * 
 */

 /**
  * function calcularLetraDNI
  * @param dni: string // Se le pone como string porque en el fondo es un código
  * @returns: string
  * 
  */

  function calcularLetraDNI(dni = '') {
      letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 
    'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    // let num = dni % 23
    // return letrasDNI[num]
    return letrasDNI[dni % 23]
  }

  /**
   * function isLetraDNIValida
   * @param dni: string (formato nnnnnnnnX)
   * @returns: boolean
   * 
   */

   //   1R - length = 2
   //   99999999R - length = 9

  function isLetraDNIValida(dni = '') {
      r = false
      let letra = dni [dni.length-1]
      let numero = dni.slice(0, dni.length-1)
      numero = formateaNumero(numero)
      if (letra === calcularLetraDNI(numero)) {
          r = true
      }
      return r
  }

  /**
   * function formateaNumero
   * @param cadena: string
   * @returns: string
   * 
   */

   function formateaNumero(cadena = '') {
       let aCadena = cadena.split('') // Esto devuelve la cadena convertida en array
       for (let i = 0; i < aCadena.length; i++) {
           const item = aCadena[i];
           if (isNaN(item)) {
               aCadena.splice(i,1)
           }
       }
       return aCadena.join('') // Para que nos devuelva una cadena con separador "nada", es decir, todo junto
   } // No hemos incluido esta función dentro de la función de arriba porque no tiene nada que ver con el resto y que podamos reaprovechar.

  (function () {
      let miDNI = '50.231.714-J'
      // console.log(calcularLetraDNI(miDNI))
      console.log(isLetraDNIValida(miDNI))
      // console.log(formateaNumero(miDNI))
  })()