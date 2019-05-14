import {Eventos} from './eventos.js.js'
// Queremos que al instanciar un objeto se vincule la función main

/* (function () {
    document.addEventListener('DOMContentLoaded', 
    () => {let misEventos =  new Eventos()})
})() */

document.addEventListener('DOMContentLoaded', () => new Eventos()) /* Me espero a que se cargue el DOM y cuando se haya cargado,
instancio un objeto (que no sé cómo se llama, pero tampoco me importa) de la class Eventos, que no tiene nombre.*/