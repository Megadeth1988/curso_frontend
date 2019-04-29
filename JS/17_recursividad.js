/**
 * Cálculo del factorial mediante recursividad.
 * Todos los procesos basados en bucles se pueden sustituir por recursividad
 */

/**
* Function factorial
* @param num: number
* @returns: num
* 
* Se calcula el producto de num por todos los inferiores a él hasta el 1
* es decir, el producto de 1 por todos los superiores hasta llegar a num
* 
*/
/* 
5! = 5 * 4!
    = 5 * 4 * 3!
    = 
 */
function factorial(num) {
    if (num < 0 || parseInt(num) !== num) {
        throw 'Los números negativos o decimales no tienen factorial'
    } else if (num === 0) {
        return 1
    } else if (num === 1) {
        return num // Esto es fundamental porque es el punto en el que se rompe la recursividad. Cuando se llega a 1 en vez de devolver el factorial de 1 para la operación.
    } else if (num > 170) {
        throw 'No puedo calcular factoriales de números tan grandes'
    }
    return num * factorial(num-1)
}

let n = 5
n = 0
n = 1
n = 6
n = 171
n = -3
n = 1.3
n = 170
n = 171
n = 13
try {
    console.log(factorial(n))
} catch (error) {
    console.log(error)
}
