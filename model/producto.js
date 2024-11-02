class Producto {
  nombre;
  precio;
  urlImagen;
  idTipo;
  activo;

  constructor(nombre, precio, urlImagen, idTipo, activo) {
    this.nombre = nombre;
    this.precio = precio;
    this.urlImagen = urlImagen;
    this.idTipo = idTipo;
    this.activo = activo;
  }
}

module.exports = Producto;
