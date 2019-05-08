let user = {
    nombre: 'Pepe',
    edad: 23,
    curso: 'Front'
}

console.log(user)
// let userString = "{nombre : 'Pepe', edad : 23, curso: 'Front'}"


let cadena = JSON.stringify(user)
console.log(cadena)

console.log(JSON.parse(cadena))

let alumno1 = {
    nombre: 'Elena',
    edad: 28,
    curso: 'JavaScript'
}

alumno2 = JSON.parse(JSON.stringify(alumno1)) // Esta es una de la maneras de clonar un objeto. Este clonaría el objeto, pero de manera recursiva, es decir, con todo lo que contuviese ese objeto.
alumno2.nombre = 'Carlos'

alumno3 = Object.assign({}, alumno1) // Non es recursivo, por lo que, si hay objetos dentro del objeto, no los clonaría
alumno3.nombre = 'Raúl'

console.log(alumno1)
console.log(alumno2)
console.log(alumno3)