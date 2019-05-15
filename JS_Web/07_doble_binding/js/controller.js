export function controller () {

    console.log('Controller cargado')

    let nombre = ''
    let msgInicial = ''

    /** Nodos del DOM */
    const inNombre = document.querySelector('#in-nombre')
    const output = document.querySelector('#output')
    const btnBorrar = document.querySelector('#btn-borrar')

    msgInicial = output.innerHTML + ' '

    /** Asignación manejadores de eventos a los nodos */
    inNombre.addEventListener('input', onInputNombre)
    btnBorrar.addEventListener('click', borrar)
    
    function onInputNombre() {
        nombre = inNombre.value
        output.innerHTML = msgInicial + nombre.toUpperCase()
    }

    function borrar() {
        inNombre.value = ''
        onInputNombre() // Ponemos esto porque así se ejecuta esta función que actualiza el contenido 
    }
}