//funcion que autocompleta los campos usuario y contraseña
function autocompletarLogin() {
  let usuario = "admin";
  let pass = "asdasd";

  document.getElementById("usuarioTxt").value = usuario;
  document.getElementById("passTxt").value = pass;
}

//evento click asociado al boton ingreso rapido.

let btnIngresoRapido = document.getElementById("btnIngresoRapido");

btnIngresoRapido.addEventListener("click", autocompletarLogin);
