class Persona {
    constructor (nombre, edad) {
        this.nombre = nombre
        this.edad = edad
        this.alma = true
    }
    saludar (aQuien = 'amigo') {
        console.log(`Hola ${aQuien}, soy ${this.nombre}`)
    }
} // Esto va a llevar aparejada una función constructora, por eso Persona está escrita la 1ª con mayúscula.


person1 = new Persona('Pepe', 23)

person1.altura = 175
console.log(person1)
person1.saludar()

class Alumno extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad) // Este super es la manera de referirse al "padre"
        this.curso = curso
    }
    saludar(aQuien = 'amigo') {
        super.saludar(aQuien)
        console.log(`Estoy estudiando ${this.curso}`)
    }
}

alumno1 = new Alumno('Elena', 22, 'WordPress')
console.log(alumno1)
alumno1.saludar()