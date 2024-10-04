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

//funcion para cambiar el icono y el tema.
function cambiarTema() {
  if (html.getAttribute("data-bs-theme") == "light") {
    iconoEnBoton.classList.remove("bi-brightness-high-fill");
    iconoEnBoton.classList.add("bi-moon-stars-fill");
    html.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    iconoEnBoton.classList.add("bi-brightness-high-fill");
    iconoEnBoton.classList.remove("bi-moon-stars-fill");
    html.setAttribute("data-bs-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

//evento click enviado al icono
let btnToggler = document.getElementById("btnToggler");
//agarro el icono adentro del boton para que al hacer click lo cambie.
let iconoEnBoton = btnToggler.querySelector("i");
let html = document.getElementsByTagName("html")[0];
btnToggler.addEventListener("click", cambiarTema);

//evento click asociado al boton aceptar del form
let btnAceptar = document.getElementById("btnAceptar");
btnAceptar.addEventListener("click", alertarNombre);
