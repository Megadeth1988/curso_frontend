/* // Tipos de Strings

   let cadena = 'Hola Mundo'
   cadena = "Hola Mundo"
   // ES6 aparecen los template string
   cadena = `
   Hola 
   Mundo
   ` //Esto reconoce formatos, por lo que no da fallos al hacer retornos de carro
   let user = 'Pepe'
   let ohio = 'Mandala'
   cadena = 'Hola' + user + ', qué tal estás?'
   cadena = `Hola ${user}, qué tal estás? Podemos ir al ${ohio}`

   console.log(cadena)


/** 
 * Programan que calcula si un número es par o impar
 * y muestra el resultado en consola.
 * 
 */

 /**
  * Function calculaQueEs
  * @param num: number // Esto es lenguaje JavaDoc
  * @returns: number
  * Posibles valores
  *     0 pares
  *     1 impares
  *     2 nº decimales
  *     3 no nº (NaN)
  */

  function calculaQueEs(num) {
      let r
      if (isNaN(num) || Array.isArray(num) || typeof num === 'boolean') {
          // num === true || num === false Es otra manera de decirle que si algo es booleano
          // no es un número
          r = 3
      } else if (parseInt(num) != num) {
          // es un nº decimal
        r = 2
      } else {
          r = num % 2
      }
      return r
  }

  /**
   * Function isPar
   * @param num: number
   * @returns: boolean
   *    true pares
   *    false impar
   * Genera excepciones si el parámetro no es numérico
   * 2 - si el valor no es número decimal
   * 3 - si el valor no es un número
   */

   function isPar(num) {
        if (isNaN(num) || Array.isArray(num) || typeof num === 'boolean') {
            throw 3 // 'El valor no es un número'
        } else if (parseInt(num) != num) {
            throw 2 // 'El valor es un número decimal'
        }
       return !(num % 2)
   }

   function isImpar(num) {
       //return r !!(num % 2)
   }

   /**
    * Function mostrar
    * @param num: number
    * @returns: void // Esto se queda en void (vacío) porque es una función de interfaz y no tiene que devolver nada, el programa acaba ahí, una vez nos muestra la información en pantalla.
    */

/*    function mostrar(isPar, num) {
       let mensajes = [
           `El número ${num} es par`,
           `El número ${num} es impar`
       ]
       if (isPar) {
           console.log(mensajes[0])
       } else {
        console.log(mensajes[1])
       }
   } */

function mostrar(num) {
    let mensajes = [
        `El número ${num} es par`,
        `El número ${num} es impar`,
        `El número ${num} es decimal, que no es ni par ni impar`,
        `El valor ${num} no es un número`
    ]

   /*  let i = 1
    if (isPar) {
        i = 0
    } */
    
    let i
    try {
        i = (isPar(num)) ? 0 : 1
    } catch (error) {
        i = error
    }
    console.log(mensajes[i])
}

/**
 * Function mostrar2
 * @param code: number //será 0 si es par y 1 si es impar
 * @param num: number
 * @returns: void
 */

   let number = 0
   number = 23
   number = 28
   number = 3.5
   number = 'Pepe'
   number = {}
   number = []
   number = true
   number = false
   

   mostrar(number)

///////////////////////////////////////////////////
////// Versión final

function mostrar2(code, num) {
    let mensajes = [
        `El número ${num} es par`,
        `El número ${num} es impar`,
        
    ]
    console.log(mensajes[code])
}

let numero = 0
numero = 25
numero = 30
numero = 'Pepe'
numero = 3.3
numero = []
numero = true

mostrar2(calculaQueEs(numero), numero)
// mostrar2(numero % 2, numero)


/* A esto se le llama control de errores o control de funciones */
try {
    // noExiste()
    let x = 3
    throw "Probando un error"
} catch (error) {
    console.log('Lo siento, ha habido un error:', error)
}