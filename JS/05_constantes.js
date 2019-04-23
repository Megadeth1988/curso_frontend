let data = 20
data = 30

console.log(data)

const DATA = 25
/* DATA = 50 daría un error porque no se pueden cambiar las constantes */

console.log(DATA)

const user = {
    name: 'Pepe',
    edad: 25
}

// Java / C# ... son LOO (Lenguajes Orientados a Objetos) basados en clases
// user1 = new User ()

// JS es un LOO basado en prototipos y objetos literales

user.altura = 179
user.name = 'Carlos'

// user.edad = 26 daría un error
// user = {} daría un error porque estaríamos reinicializando la variable y al ser una constante no se puede.

console.log (user)
console.log (user.name)
console.log (user.edad)