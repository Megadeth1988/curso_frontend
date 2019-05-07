let datos = []
// let datos = new Array() Función constructora del objeto Array que tiene como prototipo de la clase Array, que tiene el prototipo del objeto object que a su vez tiene el prototipo del objeto null

datos = [1,2,3,5,7,9]
datos.push(45)


function numeroAlAzar100() {
    return parseInt(Math.random()*100)

}

/**
 * Crea un array de n aleatorios, como mínimo 1
 * 
 * function aleatorios
 * @param: limite: number
 * @returns: array[number]
 * 
 */

 function aleatorios(limite = 1) {
     let r = []
     // let cadena = 'Hola'
     // cadena.length Existe también en cadenas (strings)
     // r.length Esto no es un método sino una propiedad.
     for (let i = 0; i < limite; i++ /*Esto indica que vaya de uno en uno en las vueltas*/) {
         r[i] = numeroAlAzar100()
     }
     return r
 }

 console.log(aleatorios(12))

function prueba() {

    let datos = [1,70,7,5,9]
    let masDatos = [1,4,6]
    let arrayFinal = datos.concat(masDatos)
    console.log(datos)
    console.log(arrayFinal)
    
    // temp = datos // copiar referencias y no sirve para guardar una copia de seguridad
    // datos.sort() // Modifica invariablemente y para siempre los datos del array

    // CLONAR UN ARRAY | función slice
    let temp = datos.slice(0)
    // temp.sort() Ordena Alfabéticamente
    temp.sort((a,b) => a-b) // Si se quiere que sort ordene numéricamente, esta es la función callback expresada con un arrow
    console.clear()
    console.log('Esto es temp')
    console.log(temp)
    console.log('Esto es datos')
    // console.log(datos.join('')) // Si a datos.join le ponemos un + por delante lo convertimos automáticamente en nº
    console.log(datos)
    
}

prueba()