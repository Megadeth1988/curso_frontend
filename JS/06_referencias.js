let data = 11
duplicar(data)
console.log(data) /* Va a mostrarnos 11 porque hace referencia al dato primero */
console.log(duplicar(data)) /* La función nunca va a tener un efecto sobre el dato de fuera, o sea, 11 */

// Los datos primitivos pasan a la función como valores
function duplicar(x) {
    x = x * 2
    return x
}


let user = {nombre: 'Pepe', edad: 23}
matricular(user)
console.log(user)

function matricular(obj) {
    obj.curso = 'JavaScript'
}