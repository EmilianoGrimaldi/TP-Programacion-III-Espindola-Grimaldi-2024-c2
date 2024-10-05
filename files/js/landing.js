function alertarNombre() {
  let nombre = document.getElementById("inputNombre").value;
  if (nombre != "") {
    //- Hacer una validacion al input -
    location.href = "pantalla-productos.html";
  }
}

//funcion para cambiar el icono y el tema.
function cambiarTema() {
  if (html.getAttribute("data-bs-theme") == "light") {
    iconoToggler.classList.remove("bi-brightness-high-fill");
    iconoToggler.classList.add("bi-moon-stars-fill");
    html.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    iconoToggler.classList.add("bi-brightness-high-fill");
    iconoToggler.classList.remove("bi-moon-stars-fill");
    html.setAttribute("data-bs-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

//evento click enviado al icono
let iconoToggler = document.getElementById("iconoToggler");
let html = document.getElementsByTagName("html")[0];
iconoToggler.addEventListener("click", cambiarTema);

//evento click asociado al boton aceptar del form
let btnAceptar = document.getElementById("btnAceptar");
btnAceptar.addEventListener("click", alertarNombre);
