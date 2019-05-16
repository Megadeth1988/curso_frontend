export function controller() {

    console.log('Cargado el controller')

    /** Nodos del DOM */
    const btnPedir = document.querySelector('#btn-pedir')
    const btnSaludar = document.querySelector('#btn-saludar')
    const btnSaludar17 = document.querySelector('#btn-saludar-17')
    const btnUsers = document.querySelector('#btn-users')
    const output = document.querySelector('#output')
    
    /** Manejadores de eventos */

    btnPedir.addEventListener('click', onPedir)
    btnSaludar.addEventListener('click', onSaludar)
    btnUsers.addEventListener('click', onUsers)
    btnSaludar17.addEventListener('click', onSaludarAwait)

    let aDatos = [1,2,3,4,5]
    aDatos.map( (item, i, array) => item * i) // La i es la posición en el array
    

    /**
     * Una "promesa" es un objeto nativo desde ES6
     * que representa la terminación o el fracaso eventual
     * de una operación asíncrona.
     * 
     * Una promesa es un objeto devuelto
     * al cual encadenas las funciones callback,
     * en vez de pasar las funciones callback a una función.
     */

     function completarPedido () {
         return new Promise( (resolve, reject) => {
            setTimeout( () => {
                if (Math.random() > 0.3) { // 70% simulamos aciertos
                    resolve('Toma tu hamburguesa')
                } else { // El otro 30% simulamos errores
                    reject('Lo siento, no quedan hamburguesas')
                }
            }, 2000 ) // Aquí es donde vamos a resolver qué pasa cuando se acabe el tiempo
        })
    }

    /* function msgAfterTimeout (msg, nombre, tiempo, cb) {
        setTimeout(function () {
            cb(msg, nombre);
        }, tiempo);
    }; */
    


    function onPedir() {

        completarPedido()
        .then( (datos) => {
            output.innerHTML += '<li>' + datos + '</li>'
        })
        .catch( (error) => {
            output.innerHTML += '<li>' + error + '</li>' 
        })

    }

    /* msgAfterTimeout( 'Juanito', 'Pepito', 3500, (msg, nombre) => {
        let saludo = (`Hola ${nombre}!`)
        let quienSoy = msg
        console.log(saludo)
        msgAfterTimeout(msg, saludo, 500, (quienSoy, saludo) => {
            console.log(`${saludo}, soy ${quienSoy}`)
        }) */

    function msgAfterTimeout(msg, nombre, tiempo) {
        return new Promise( (resolve) => {
            setTimeout(() => {
                resolve([msg, nombre])
            }, tiempo)
        })
    }

    
    function onSaludar() {
        msgAfterTimeout( 'Juanito', 'Pepito', 3500)
        .then( (datos) => {
            let saludo = (`¡Hola ${datos[1]}!`)
            let quienSoy = datos[0].toLowerCase()
            console.log(saludo)
            return msgAfterTimeout(quienSoy, saludo, 500)
        }).then( (datos) => {
            console.log(`${datos[1]}, soy ${datos[0]}`)
        })
    }

    /* Ejemplo de la misma función usando

/* function onSaludar() {
        msgAfterTimeout( 'Juanito', 'Pepito', 3500)
        .then( ([msg, nombre]) => {
            let saludo = (`¡Hola ${nombre}!`)
            let quienSoy = msg
            console.log(saludo)
            return msgAfterTimeout(msg, saludo, 500)
        }).then( ([quienSoy, saludo]) => {
            console.log(`${saludo}, soy ${quienSoy}`)
        })
    } */

    /**
     * En ES2017 aparece async / await
     */


    async function onSaludarAwait () {
        let datos = []
        datos = await msgAfterTimeout( 'Juanito', 'Pepito', 3500)
        let saludo = (`¡Hola ${datos[1]}!`)
        let quienSoy = datos[0].toUpperCase()
        console.log(saludo)
        datos = await msgAfterTimeout(quienSoy, saludo, 500)
        console.log(`${datos[1]}, soy ${datos[0]}`)
    } // Esta es una forma aparentemente más lineal de escribir la asincronía


    function onUsers() {
        const url = 'https://jsonplaceholder.typicode.com/users' // Para que me dé la lista de los usuarios al pulsar el botón
        fetch(url)
        .then( (response) => { return response.json()})
        .then( (data) => { console.dir(data) }) 
    }

}