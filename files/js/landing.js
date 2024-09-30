function alertarNombre() {
  let nombre = document.getElementById("inputNombre").value;
  if (nombre != "") {
    //- Hacer una validacion al input -
    location.href = "pantalla-productos.html";
  }
}

//evento click asociado al boton aceptar del form
let btnAceptar = document.getElementById("btnAceptar");
btnAceptar.addEventListener("click", alertarNombre);
