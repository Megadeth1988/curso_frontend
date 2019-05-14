export class Saludador {
    constructor() {
        this.aQuien = ''
        this.msg = [`Hola, `, `Adiós, `]

        /**Seleccionar nodos del DOM */
        this.inNombre = document.querySelector('#in-nombre')
        this.btnSaludar = document.querySelector('#btn-saludar')
        this.btnDespedirse = document.querySelector('#btn-despedirse')
        this.output = document.querySelector('#output')
        this.btnBorrar = document.querySelector('#btn-borrar')
        
        /**Asignar manejadores a los nodos */
        this.btnSaludar.addEventListener('click', this.saludar.bind(this))
        this.btnDespedirse.addEventListener('click', this.despedirse.bind(this))
        this.btnBorrar.addEventListener('click', this.borrar.bind(this))
    }
    saludar () {
        if (this.inNombre.value) {
            this.aQuien = '<b>' + this.inNombre.value + '</b>' // Esto es lo que haya escrito el sujeto en el campo value (o sea, el valor)
        // console.log(this.msg[0] + this.aQuien)
        this.output.innerHTML = this.msg[0] + this.aQuien
        }
        
    }
    despedirse() {
        if (this.inNombre.value) {
            this.aQuien = '<b>' + this.inNombre.value + '</b>'
        // console.log(this.msg[1] + this.aQuien)
        this.output.innerHTML = this.msg[1] + this.aQuien
        }
    }
    borrar() {
        this.output.innerHTML = '' // Lo ponemos para que nos borre lo que hay en el output (salida)
        this.inNombre.value = '' // Con ello también estamos borrando la caja de datos
    }
}