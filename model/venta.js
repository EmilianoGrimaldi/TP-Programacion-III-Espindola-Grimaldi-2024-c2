class Venta {
  producto;
  cantidad;
  precio;
  total;

  constructor() {}

  toJson() {
    return JSON.stringify(this);
  }
}

module.exports = Venta;
