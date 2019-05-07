/**
 * Dada una cadena de caracteres hay que indicar si está formada:
 * - sólo por letras mayúsculas.
 * - sólo por minúsculas.
 * - por la combinación de ambas.
 * 
 */

/*
ESTO ES UN TIPO DE PATRÓN DE ESTRUCTURAR LAS FUNCIONES POR MÓDULOS
*/

    /**
     * function comoEsLaCadena
     * @param cadena: string
     * @returns: void
     * 
     */
    
    function comoEsLaCadena(cadena = '') {
        let mensajes = [
            'La cadena está formada sólo por letras mayúsculas',
            'La cadena está formada sólo sólo por minúsculas',
            'La cadena está formada por una combinación de mayúsculas y minúsculas'
        ]
        // let i = probarCadena(cadena)
        // console.log(mensajes[i])
        console.log(mensajes[probarCadena(cadena)]) // Esta es la alternativa 'pro'

    /**
     * function probarCadena
     * @param cadena: string
     * @returns: number
     * - 0 = sólo por letras mayúsculas
     * - 1 = sólo por minúsculas
     * - 2 = por la combinación de ambas
     */

    function probarCadena(cadena = '') /*Si yo no pongo nada, la variable cadena es una variable de tipo undefined*/ {
        let r = 2 // Establecemos un valor por defecto para la variable r en la que se va a guardar el resultado, le damos un valor por defecto para que implique un tipo. El valor que ponemos por defecto coincide con el que le daríamos a la condición else en caso de que ninguno de los if se cumplan, devuelve r = 2
        if(cadena === cadena.toUpperCase()) {
            r = 0
        } else if (cadena === cadena.toLowerCase()) {
            r = 1
        } //Aquí podríamos poner un else en el que pondríamos que si no, el valor de r sería 2, pero como lo ponemos de valor de partida, nos lo ahorramos.
        return r
    }

}

(function () {
    let texto
  texto = 'EN UNA GALAXIA MUY MUY LEJANA'
  comoEsLaCadena(texto)
  texto = 'en una galaxia muy muy lejana'
  comoEsLaCadena(texto)
  texto = 'En una galaxia muy muy lejana'
  comoEsLaCadena(texto)
})() 

// Con esto conseguimos que esté todo dentro de funciones. Una función exterior en la que esté todo el programa y una función anónima autoejecutable.