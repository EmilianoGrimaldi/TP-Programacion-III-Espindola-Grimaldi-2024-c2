function alertarNombre() {
  let nombre = document.getElementById("inputNombre").value;

  if (nombre != "") {
    //- Hacer una validacion al input -
    location.href = "pantalla-productos.html";
  }
}

//funcion para cambiar el icono según el tema y lo guarda en localStorage.
function cambiarIconoSegunTema() {
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

//funcion que obtiene el tema del local storage guardado antes y setea el tema de la pagina.
function temaLocalStorage() {
  //OBTENEMOS THEME
  let tema = localStorage.getItem("theme");
  //DEPENDE EL THEME CONFIGURAMOS EL TEMA DE LA WEB
  switch (tema) {
    case "dark":
      iconoToggler.classList.remove("bi-brightness-high-fill");
      iconoToggler.classList.add("bi-moon-stars-fill");
      html.setAttribute("data-bs-theme", "dark");
      break;
    case (null, "light"):
      iconoToggler.classList.add("bi-brightness-high-fill");
      iconoToggler.classList.remove("bi-moon-stars-fill");
      html.setAttribute("data-bs-theme", "light");
      break;
  }
}
// llamo a la funcion y se la asigno a window.onload (cuando carga la pagina).
window.onload = temaLocalStorage;

//evento click enviado al icono.
let html = document.getElementsByTagName("html")[0];
let iconoToggler = document.getElementById("iconoToggler");
iconoToggler.addEventListener("click", cambiarIconoSegunTema);

//evento click asociado al boton aceptar del form.
let btnAceptar = document.getElementById("btnAceptar");
btnAceptar.addEventListener("click", alertarNombre);
