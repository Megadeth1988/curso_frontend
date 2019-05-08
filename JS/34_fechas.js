/* Date.prototype.toStringEnEspañol = function () {
        const aDias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
        const aMeses = ['Enero', 'febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        let fechaToString = ''
        console.log('This')
        console.log(this)
        fechaToString += aDias[fecha.getDay] + ', '
        fechaToString += fecha.getDate() + ' de '
        fechaToString += aMeses[fecha.getMonth()] + ' de '
        fechaToString += fecha.getFullYear()
        return fechaToString
    }   
} */



(function () {
    let hoy = new Date() // Esto nos devuelve la fecha de hoy
    console.log(hoy)

    let fecha = new Date(012146466465456)
    console.log(fecha)
    console.log(fecha.getFullYear())

    let nacimiento = new Date(1988,8,17,12)
    console.log(nacimiento.toLocaleDateString())
    console.log(nacimiento.toLocaleTimeString())
    console.log(nacimiento.toLocaleString())
    console.log(nacimiento.toDateString())
    console.log(nacimiento.getDay())
    console.log(fechaEnEspañolToString(nacimiento))
    // console.log(nacimiento.toStringEnEspañol)
})()

// Con las funciones get se extrae algo del Date

/**
 * Mostrar fecha como "día de semana, día de Mes de Año"
 */

 /**
  * fechaEnEspañolToString
  * @param: fecha: Date
  * @returns: string
  * 
  */

  function fechaEnEspañolToString(fecha = new Date()) {
    const aDias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    const aMeses = ['Enero', 'febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    /* let fechaToString = ''
    fechaToString += aDias[fecha.getDay] + ', '
    fechaToString += fecha.getDate() + ' de '
    fechaToString += aMeses[fecha.getMonth()] + ' de '
    fechaToString += fecha.getFullYear() */
    let fechaToString = aDias[fecha.getDay()] + ', '
    + fecha.getDate() + ' de '
    + aMeses[fecha.getMonth()] + ' de '
    + fecha.getFullYear()
    return fechaToString
}