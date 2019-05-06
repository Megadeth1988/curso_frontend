/**
 * Creamos un objeto con los nombres de los meses en español como propiedades
 * y sus equivalentes en otro idioma (ej. inglés) como valor
 * y añadimos una función que muestre por consola la frase
 * "El mes ... en inglés se escribe ..." para cada uno de los meses
 */

let mesesEnIngles = {
    enero : 'january',
    febrero : 'february',
    marzo : 'march',
    abril : 'april',
    mayo : 'may',
    junio : 'june',
    julio : 'july',
    agosto : 'august',
    septiembre : 'september',
    octubre : 'october',
    noviembre : 'november',
    diciembre : 'december',
    toString: function () {
        let output = ''
        for (const key in this) {
            const element = this[key]; 
            if (typeof element === 'function') {
                continue
            }
            output = output + `El mes ${key} en inglés se escribe ${element}` + '\n'
        }
        return output
    },
    mostrar: function() {
        console.log(this.toString())
    }
}

mesesEnIngles.mostrar()