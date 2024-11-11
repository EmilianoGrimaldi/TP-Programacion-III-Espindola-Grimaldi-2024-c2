class Carrito {
  productos;
  cantidad;
  precio;
  subtotal;
  total;

  constructor() {}
  
  toJson() {
    return JSON.stringify(this);
  }
}

module.exports = Carrito;
