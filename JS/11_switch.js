// IF sobre valores discretos de una sola variable
// if (x > 5)
// if (x == 2 && y == 3)

let cargo // Gerente, Senior, Junior, Becario
cargo = 'Gerente'
cargo = 'Senior'
cargo = 'Junior'
let bonus
switch (cargo.toLowerCase()) {
    case 'director':
    case 'gerente':
        bonus = 10000
        break // los break sirven para parar el case y en caso de no ponerlo lo que hace es agrupar cases.
    case 'senior':
        bonus = 1000
        break
    default:
        bonus = 0
        break
}


if (cargo.toLowerCase() == 'director' || cargo.toLowerCase() == 'gerente') {
    bonus = 10000
} else if (cargo.toLowerCase() == 'senior') {
    bonus = 1000
} else {
    bonus = 0
}

console.log(`Como eres ${cargo}, tu bonus es de ${bonus}€`)

// En JAVA, C#...
// string name = 'Pepe' // Tengo esta variable y se la paso a las funciones del sistema
// string nameMay = UpperCase(name) // Esto son funciones del sistema

let array = []
array.push()

// En JS no se coge la función y se le pasa la variable como al resto sino que a pesar de ser un elemento y ser un string.
let name = 'Pepe'
let nameMin = name.toLowerCase()
let nameMay = name.toUpperCase()

console.log(name, nameMin, nameMay)