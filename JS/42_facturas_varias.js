/**
 * Rehacemos el ejercicio empleando una función constructora
 */

function Factura (empresa, cliente, items, tipoIVA, formaPago) {
    this.empresa = empresa
    this.cliente = cliente
    this.items = items
    this.tipoIVA = tipoIVA
    this.formaPago = formaPago
}

Factura.prototype.calculaImporte = function () {
    let iva = this.tipoIVA < 1 ? 1 + this.tipoIVA : this.tipoIVA
    return this.items.map(item => item.precio * item.cantidad).reduce((a,b) => a+b)*iva
}

Factura.prototype.muestraImporte = function () {
    let msg = 'El importe total es' + this.importeTotal.toFixed(2) + '€'
    console.log(msg)
}

function Empresa (nombre, direccion, telefono, NIF) {
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
    this.NIF = NIF
}

function Item (descripcion, precio, cantidad) {
    this.descripcion = descripcion
    this.precio = precio
    this.cantidad = cantidad
}

factura1 = new Factura(
    new Empresa('Ediciones Boracay', 'c/ Pez', '916587686', 'B-64539874'),
    new Empresa('Libros Tuatalug', 'c/ Marqués de Viana', '917256983', 'M-64584741'),
    [   new Item('Libro1', 20, 12),
        new Item('Libro2', 24.8, 10),
        new Item('Libro3', 34.7, 7)],
    0.23,
    'efectivo'
)

function Persona(nombre = 'amigo', edad = 0, nacionalidad = 'español') { // Con esto estamos definiendo los valores por defecto del objeto persona
    this.nombre = nombre
    this.edad = edad
    this.nacionalidad = nacionalidad
}

let p1 = new Persona ('Pepe', 22, 'cubano')
console.log(factura1)
factura1.muestraImporte()