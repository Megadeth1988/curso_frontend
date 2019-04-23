let data = 11
console.log(duplicar(data)) /* La función nunca va a tener un efecto sobre el dato de fuera, o sea, 11 */
console.log(data) /* Va a mostrarnos 11 porque hace referencia al dato primero */

// Los datos primitivos pasan a la función como valores. Esta es una variable pura.
function duplicar(x) {
    x = x * 2
    return x
}


/* let user = {nombre: 'Pepe', edad: 23}
matricular(user)
console.log(user)

function matricular(obj) {
    obj.curso = 'JavaScript'
} */

/* la referencia user y obj apuntan al mismo sitio de la memoria, pero con referencias distintas, por lo tanto son el mismo objeto. */

let user1 = {nombre: 'Pepe', edad: 23}
matricular(user1, 'HTML')
console.log(user1)
let user2 = {nombre: 'Rosa'}
matricular(user2)
console.log(user2)

function matricular(obj, curso = 'JavaScript') {
    obj.curso = curso /* Este es el objeto desde fuera que es manipulado desde esta función */
}