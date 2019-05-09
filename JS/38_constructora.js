const user1 = {
    nombre: 'Pepe',
    edad: 25,
    saludar: function (aQuien = 'amigo') {
        console.log(`Hola ${aQuien}, soy ${this.nombre}`)
    },
}

// Esto es una función constructora
function User(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
    this.mascotas = []
    }

User.prototype.adoptarMascota = function (mascota = new Mascota()) {
    this.mascotas.push(mascota)
}

// Es menos habitual, pero también podemos añadir funciones
// a los prototipos nativos de JS, como Object, Array, Date...

Object.prototype.saludar = function (aQuien = 'amigo') {
        console.log(`Hola ${aQuien}, soy ${this.nombre}`)
    } // Los métodos que queramos que sean parte del prottipo

    // Si quiero hacer algo común a todos los objetos, lo añado al prototipo Object

function Mascota(nombre, especie, raza= '' ) {
    this.nombre = nombre
    this.especie = especie
    this.raza = raza
}


let user2 = new User('Elena', 23) // Elena tiene como prototipo el objeto genérico User, que a su vez tiene Object y a su vez Null. La diferencia con user1 es que user1 sólo tiene como prototipo el objeto Object.
let user3 = new User('Ernesto', 30)
let mascota1 = new Mascota('César', 'perro')
let mascota2 = new Mascota('Titus', 'gato', 'persa')

mascota2.edad = 2
delete mascota1.raza // Se le pueden quitar las propiedades, en este caso, la propiedad raza

user2.adoptarMascota(mascota1)

console.log(mascota1.nombre)
console.log(user2.mascotas[0].nombre)

console.log(user1)
console.log(user2)
console.log(user3)
console.log(mascota1)
console.log(mascota2)

user1.saludar('Ernesto')
user2.saludar('Pepe')
user3.saludar(user2.nombre)

user1.saludar(mascota2.especie + ' ' + mascota2.raza + ' ' + mascota2.nombre)
// mascota1.saludar(user2.nombre)

/* function saludar(user) {
    console.log(`Hola, soy ${user}`)
}

saludar('Pepe') */

let aDatos = [2,4]
let aNombres = ['Pepe', 'Juan']


// Diferencia entre PROTOTIPOS y clases

// Dependencia : método adoptarMascota

// Asociación : atributo mascota = new Mascota

user3.mascotas[0] = new Mascota('Piolín', 'canario')
console.log(user3.mascotas[0].nombre)