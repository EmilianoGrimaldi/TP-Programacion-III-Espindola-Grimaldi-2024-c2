class Producto {
  nombre;
  precio;
  imagen;
  descripcion;
  activo;

  constructor(nombre, precio, imagen, descripcion, activo) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.descripcion = descripcion;
    this.activo = activo;
  }

  toJson() {
    return JSON.stringify(this);
  }
}

module.exports = Producto;
