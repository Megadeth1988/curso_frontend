/**
 * Función manejadora de eventos (Event Handler). Son un tipo de callback que el SO ejecuta cuando considera necesario, es decir, cuando se produce un evento
 * 
 * */
        
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

/**
 * 
 * Acceso al DOM (Document Object Model)
 */

// window.addEventListener('load')

function main () {

    let datos = [1,2,3,4,5]
    console.log(datos.map(cuadrados))

    document.querySelector('#btn-saludar').addEventListener('click', saludar)
    document.querySelector('#btn-despedir').addEventListener('click', despedirse)
    document.querySelector('#div-raton').addEventListener('mouseover', onMouseOver)
    document.querySelector('#div-raton').addEventListener('mouseout', onMouseOut)

}

(function () {
    document.addEventListener('DOMContentLoaded', main)
})()
