// Esto
//let vuelo1 = new Object()

let vuelo1 = {
    airline: 'Oceanic',
    number: '815', // a la hora de guardarlo es mejor que los numeros que no son aritméticos se guarden en forma de string
    departure: {
        IATA: 'SYD',
        time: '2004-09-22 14:55',
        ciudad: 'Sydney',
    },
    arrival: {
        IATA: 'LAX',
        time: '2004-09-23 10:42',
        ciudad: 'Los Angeles'
    }
}

vuelo1.mostrar = function (obj = this) {
    for (const key in obj) {
        const element = obj[key]; 
        if (typeof element === 'function') {
            continue
        } // Con esto estamos creando una precondición con la que le estamos diciendo que si es una función continúe con las vueltas sin hacer nada
        if (typeof element !== 'object') {
            console.log(`La propiedad ${key} vale ${element}`)
        }
        else { // element === 'object'
            console.log(`La propiedad ${key} vale...`)
            obj.mostrar(element)
        }
    }
}


// console.log (typeof vuelo1.mostrar)
// vuelo1.mostrar()


/**
 * @param : object
 * @returns : string
 * 
 * Esta función formatea la salida de datos
 */

vuelo1.toString = function (obj = this) {
    let output = ''
    for (const key in obj) {
        const element = obj[key]; 
        if (typeof element === 'function') {
            continue
        } // Con esto estamos creando una precondición con la que le estamos diciendo que si es una función continúe con las vueltas sin hacer nada
        if (typeof element !== 'object') {
            output = output + `La propiedad ${key} vale ${element}` + '\n'
            // output += `La propiedad ${key} vale ${element}`
        }
        else {
            output = output + `La propiedad ${key} vale...` + '\n'
            // output += `La propiedad ${key} vale...`
            output = output + obj.toString(element)
        }
    }
    return output
}

vuelo1.mostrarFinal = function () {
    console.log(this.toString())
}

// vuelo1.mostrar()

vuelo1.mostrarFinal()