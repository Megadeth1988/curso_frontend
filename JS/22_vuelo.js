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
    },
}

// let datos = 'departure'
let datos = 'arrival'

//Notación por puntos
// console.log(vuelo1.number) // Esto es lo que se llama notación por puntos
// console.log(vuelo1.datos)

//Notación por corchetes -> permite usar variables para los nombres de propiedades.
console.log(vuelo1['number']) // Esta es lo que se llama notación por corchetes. Nos permite hacer cosas que no permite la notación por puntos. Esta notación por defecto espera una variable, no una propiedad.
console.log(vuelo1[datos]) // Está interpolando la variable y usando su valor. Esto es porque a veces necesitamos usar una variable cuando estamos recorriendo un array.

let users = ['Pepe', 'Rosa', 'Juan', 'Maria']
console.log(users)

for (let i = 0; i < users.length; i++) {
    const user = users[i]; // Este const lo que hace es proteger el valor user para que no haya errores de interacción entre una vuelta y otra. Por eso se pone un const y no un let. Si quiero coger un valor de una vuelta a otra pondría un let, pero fuera de la función.
    console.log(`Hola ${user}`)
} // Este bucle se utiliza para recorrer arrays

/* for (const key in vuelo1) {
        const element = vuelo1[key];
        if (typeof element != 'object') {
          console.log(`La propiedad ${key} vale ${element}`)  
        } else {
            for (const key in element) {
                    const item = element[key];
                    console.log(`La propiedad ${key} vale ${item}`)
                }
        }
} */ // Este es el bucle que se utiliza para recorrer objetos.

function mostrarObjeto(obj) {
    for (const key in obj) {
        const element = obj[key]; 
        if (typeof element != 'object') {
            console.log(`La propiedad ${key} vale ${element}`)
        }
        else {
            console.log(`La propiedad ${key} vale...`)
            mostrarObjeto(element)
        }
    }
}

mostrarObjeto(vuelo1)