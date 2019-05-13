/**
 * Objeto facturas
 * 
 * Definir la estructura de un objeto que almacena una factura
 * Las facturas están formadas por:
 * - La información de la propia empresa (nombre de la empresa, dirección, teléfono, NIF)
 * - La información del cliente (similar a la de la empresa)
 * - Una lista de elementos (cada uno de los cuales dispone de descripción, precio, cantidad.)
 * - Y otra información básica de la factura (importe total, tipo de IVA, forma de pago)
 * 
 * Añadir un método que calcule el importe total de la factura
 * y actualice el valor de la propiedad correspondiente.
 * 
 * Añadir otro método que muestre por pantalla el importe total de la factura
 * (en un formato HTML adecuado)
 * 
 */

factura = {
    empresa: {
        nombre: 'Ediciones Boracay',
        dirección: 'c/ Pez',
        teléfono: '916587686',
        NIF: 'B-64539874'},
    cliente: {
        nombre: 'Libros Tuatalug',
        dirección: 'c/ Marqués de Viana',
        teléfono: '917256983',
        NIF: 'M-64584741'},
    items: [
        {descripcion: 'Libro 1', precio: 20, cantidad: 12},
        {descripcion: 'Libro 2', precio: 24, cantidad: 10},
        {descripcion: 'Libro 3', precio: 34, cantidad: 7},
    ],
    importeTotal: 0,
    tipoIVA: 0.23,
    formaPago: 'efectivo',
    calculaImporte: function() {
        let iva = this.tipoIVA < 1 ? 1 + this.tipoIVA : this.tipoIVA
        return this.items.map(item => item.precio * item.cantidad).reduce((a,b) => a+b)*iva // De aquí sale un array de números, producto de una proyección del array original, que lo hacemos con map. Definimos con el callback (item => item.precio * item.cantidad) la función de la proyección. Después, usamos reduce para sumar los precios, y lo definimos en ((a,b) => a+b) y lo multiplicamos por el iva. Con reduce obtenemos un sólo valor, que no necesariamente es un number.
    },
    actualizaImporte: function () {
        this.importeTotal = this.calculaImporte()
    },
    muestraImporte: function () {
        // this.calculaImporte()
        // let msg = 'El importe total (IVA incluido) es ' + this.importeTotal.toFixed(2) + ' €'
        let msg = 'El importe total (IVA incluido) es ' + this.calculaImporte().toFixed(2) + ' €' // Esto es útil porque si hay cualquier cambio se actualiza y no deja lugar a duda.
        console.log(msg)
    }
}

factura.muestraImporte()