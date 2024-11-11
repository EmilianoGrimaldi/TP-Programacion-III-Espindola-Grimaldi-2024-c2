class Usuario {
  correo;
  contrasenia;

  constructor() {}

  toJson() {
    return JSON.stringify(this);
  }
}

module.exports = Usuario;
