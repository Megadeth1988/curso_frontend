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

 (factura = {
     empresa: {nombre: '', dirección: '', teléfono: '', NIF: ''},
     cliente: {nombre: '', dirección: '', teléfono: '', NIF: ''},
     items: [
         {descripcion: '', precio: 20, cantidad: 12},
         {descripcion: '', precio: 24, cantidad: 18},
         {descripcion: '', precio: 34, cantidad: 7},
     ],
     importeTotal: 0,
     tipoIVA: 0.23,
     formaPago: 'efectivo',
     calculaImporte: function() {
         let iva = this.tipoIVA<1 ? 1+this.tipoIVA: this.tipoIVA
        return this.items.map(item => item.precio * item.cantidad).reduce((a,b) => a+b)*iva
     },
     actualizaImporte: function () {
         this.importeTotal = this.calculaImporte()
     },
     muestraImporte: function () {
         this.actualizaImporte()
         let msg = 'El importe total es' + this.importeTotal.toFixed(2) + '€'
         console.log(msg)
     },
 }
factura.muestraImporte()
})()