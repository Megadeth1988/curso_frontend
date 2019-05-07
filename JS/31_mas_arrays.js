let nombres = ['Pepe', 'Juan', 'Bernardette', 'Penelope', 'Eustaquio']

// Slice es una función que no modifica el array original (inmutable)
console.log(nombres.slice(0,3)) // Incluye la posición inicial, pero no la posición final.

// Splice es una función mutable, es decir, el array original queda afectado por los cambios que realicemos

let newNombres = nombres.splice(1,1) // Splice n,n lo que hace es quitar un elemento del array
console.clear()
console.log(nombres)
console.log(newNombres)


// Colas y pilas - todas mutables

// Pilas 
nombres.push() // Añade al final - Esta es la más utilizada
nombres.pop() // Quita al final

//Colas
nombres.shift() // Quitar el primero
nombres.unshift() // Añadir al principio

// nombres.push('Aurora')
// nombres[nombres.length] = 'Aurora'


let datos = [1,70,7,5,9]
let masDatos = [1,4,6]
datos.push(masDatos) // Esto conseguiría hacer un array de arrays
console.log(datos)