export function controller () {

    console.log('Controller cargado')

    /** Declarar variables */
    let isVisibleDiv = false
    let msg = ['[...mostrar menos]', '[...mostrar más]']

    /** Nodos del DOM */
    let nodos = {
        btnCambiar: document.querySelector('#btn-cambiar'),
        divHide: document.querySelector('#div-hide')
    }
    nodos.btnCambiar.innerHTML = msg[1]

    /** Asignación manejadores de eventos a los nodos */
    nodos.btnCambiar.addEventListener('click', toggle)

    function toggle () {
        /* let i = 0
        if(isVisibleDiv) {
            i = 1
            // hay que ocultar
            // nodos.divHide.classList.add('hide') // hay que pasarle el nombre de la clase que hay que añadir
            // ya hemos ocultado
            // nodos.btnCambiar.innerHTML = msg[1]
            // isVisibleDiv = false

        } else {
            // hay que mostrar
            // nodos.divHide.classList.remove('hide')
            // ya hemos mostrado
            // nodos.btnCambiar.innerHTML = msg[0]
            // isVisibleDiv = true
        } */

        // let i = isVisibleDiv ? 1 : 0
        nodos.btnCambiar.innerHTML = msg[isVisibleDiv ? 1 : 0]
        nodos.divHide.classList.toggle('hide') // Conmuta el estado de la clase, en este caso 'hide'
        isVisibleDiv = !isVisibleDiv // Esto se pone para que sea el estado que sea en el que está isVisibleDiv sea el contrario y por lo tanto cambiar el estado con el que entra
    }
    
}