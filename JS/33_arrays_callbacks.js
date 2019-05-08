let edades = [5,8,23,45,67,56,89]

let cuadrados = edades.map(item => item * item /*Esta es una función que como es de una sola línea no hacen falta los */) // Devuelve un array de la misma longitud del original en el que cada uno de los items van a ser modificados. Es como cuando una matriz (matemáticas) se proyecta y se genera una nueva matriz de la misma longitud pero afectada por la operación que sea

let sumaTotal = 0
for (let i = 0; i < edades.length; i++) {
    const item = edades[i]; // Guardo los números de las edades en la variable item para luego operar con ella
    // sumaTotal = sumaTotal + item
    sumaTotal += item
}

// En programación moderna los bucles for sobre arrays se hacen con un foreach
let sumaCuadrados = 0
cuadrados.forEach(item => sumaCuadrados += item) // Esta función tiene un parámetro item en la que nosotros hacemos una operación con item. Hace lo mismo que for y además es más eficaz

// filter no hace operaciones, aplica un filtro, si se cumple lo guarda
let edadesPares = edades.filter(item => !(item%2)) // Como queremos que el 0 sea true, lo ponemos como !item%2, para cambiarle el significado
let edadesImpares = edades.filter(item => item%2)

let limit = 25
let edadesGrandes = edades.filter(item => item >= limit)

let productoAcumulado = edades.reduce((a,b) => a*b)
let sumaAcumulada = edades.reduce((a,b) => a+b)

console.log(cuadrados)
console.log(sumaTotal)
console.log(sumaCuadrados)
console.log (edadesPares)
console.log (edadesImpares)
console.log (edadesGrandes)
console.log (productoAcumulado)
console.log (sumaAcumulada)
console.log (sumaCuadrados)