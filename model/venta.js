class Venta {
  producto;
  cantidad;
  precio;
  total;

  constructor(producto, cantidad, precio, total) {
    this.producto = producto;
    this.cantidad = cantidad;
    this.precio = precio;
    this.total = total;
  }
}

module.exports = Venta;
