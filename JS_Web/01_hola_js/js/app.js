/* Función manejadora de eventos (Event Handler). Son un tipo de callback que el SO ejecuta cuando considera necesario, es decir, cuando se produce un evento */
        
function saludar () {
            console.log('Hola desde una función en un fichero JS')
}

function despedirse () {
    console.log('Adiós desde una función en un fichero JS')
}

function onMouseOver() {
    console.log('El ratón entró')
}

function onMouseOut() {
console.log ('El ratón salió')
}

function cuadrados(item) {return item * item}

let datos = [1,2,3,4,5]
console.log(datos.map(cuadrados))