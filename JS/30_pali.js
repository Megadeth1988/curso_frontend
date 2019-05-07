/**
 * Crear una función que nos dice si una frase es un palíndromo o no,
 * es decir, si se lee igual en ambos sentidos
 * La ruta nos aportó otro paso natural
 * Atar a la rata...
 * 
 */

 /**
 * function isPalindromo
 * @param: cadena: string
 * @returns: boolean
 * } cadena 
  */

 function isPali(cadena = '') {
     let r = true
     let cadenaSinEspacios = cadena.split(' ').join('').toLowerCase() // split de palabras
     // console.log(cadenaSinEspacios)
     let cadenaInversa = cadenaSinEspacios.split('').reverse().join('') // split de letras
     // console.log(cadenaInversa)
     if (cadenaSinEspacios !== cadenaInversa) {
         r = false
     }
     return r
 }


 /* function isPali2(cadena = '') {
     let r = true
     // let cadenaSinEspacios = cadena.split(' ').join('')
     // console.log(cadenaSinEspacios)
     let cadenaInversa = cadenaSinEspacios.split('').reverse().join('')
     // console.log(cadenaInversa)
     let cadenaInversa = cadena.split('').reverse().join('')
     if (cadena.toLowerCase() !== cadenaInversa) r = false // MALA PRÁCTICA
     return r
 } */

function isPaliShort(cadena = '') {
     return cadena.toLowerCase() === cadena.split(' ').split('').reverse().join('') ? true: false
 }

 (function () {
     let textos = [
         'Esto no es un palíndromo',
         'La ruta nos aporto otro paso natural',
         'Atar a la rata'
     ]
     for (let i = 0; i < textos.length; i++) {
         const texto = textos[i];
         console.log(texto)
         console.log(isPali(texto))
     }
 })()