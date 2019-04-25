/* for (let i = 0; /* Que nombre tiene mi contador y cuando empieza
    i < 5; // Mientras i sea menor que n. Esto indica el número de vuelta
     i++) // Esto indica que el contador de i sube de uno en uno, que es lo más habitual
      {
    console.log(i+1)
    } */

/**
 * Programa de cálculo del factorial de un número
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

/* Esta función es una operación equipotente, es una función PURA */
    function factorial(num) {
        if (num <= 0) {
            // vale para 0 y los números negativos
            return 0
        }
        let r = 1
        for (let i = 1; i <= num; i++) {
            r = r * i
        }
        return r
    }

    /** Usar if y else y un solo return */
    function factorial2(num) {
        let r = 1
        if (num <= 0) {
            r = 0
        } else {
            for (let i = 1; i <= num; i++) {
                r = r * i
            }
        }
        return r
    }

    let number = 0
    number = 5
    number = -4
    console.log(factorial(number))

    number = 0
    number = -4
    number = 5
    console.log(factorial2(number))