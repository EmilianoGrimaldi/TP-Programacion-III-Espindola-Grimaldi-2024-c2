//alerta a mejorar

function alertarNombre() {
  let nombre = document.getElementById("inputNombre").value;
  alert(`Bienvenido ${nombre}`);
  //direcciona al index deespues de aceptar el alert.
  //- Hacer una validacion al input -
  location.href = "index.html";
}

//evento click asociado al boton aceptar del form
let btnAceptar = document.getElementById("btnAceptar");
btnAceptar.addEventListener("click", alertarNombre);
