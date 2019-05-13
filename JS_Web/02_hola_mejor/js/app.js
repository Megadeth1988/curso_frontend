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

window.onload = function () {

    let datos = [1,2,3,4,5]
    console.log(datos.map(cuadrados))

    document.querySelector('#btn-saludar').onclick = saludar // No hay que poner los paréntesis para que no se ejecute de manera síncrona
    // document.querySelector("button:nth-of-type(2)").onclick = despedirse
    document.querySelector('#btn-despedir').onclick = despedirse
    document.querySelector('#div-raton').onmouseover = onMouseOver
    document.querySelector('#div-raton').onmouseout = onMouseOut
}