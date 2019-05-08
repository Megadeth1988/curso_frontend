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
    },
    toString : function (obj = this) {
        let output = ''
        for (const key in obj) {
            const element = obj[key]; 
            if (typeof element === 'function') {
                continue
            }
            if (typeof element !== 'object') {
                output = output + `La propiedad ${key} vale ${element}` + '\n'
            }
            else {
                output = output + `La propiedad ${key} vale...` + '\n'
                output = output + obj.toString(element)
            }
        }
        return output
    },
    mostrar : function () {
        console.log(this.toString())
    }
}

vuelo1.mostrar()