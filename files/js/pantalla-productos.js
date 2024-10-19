const btnDetalles = document.getElementsByClassName("btnDetalles");

//funcion para cambiar el icono según el tema y lo guarda en localStorage.
function cambiarIconoSegunTema() {
  if (html.getAttribute("data-bs-theme") == "light") {
    iconoToggler.classList.remove("bi-brightness-high-fill");
    iconoToggler.classList.add("bi-moon-stars-fill");
    html.setAttribute("data-bs-theme", "dark");

    body.classList.add("dark-mode");

    localStorage.setItem("theme", "dark");
  } else {
    iconoToggler.classList.add("bi-brightness-high-fill");
    iconoToggler.classList.remove("bi-moon-stars-fill");
    html.setAttribute("data-bs-theme", "light");

    body.classList.remove("dark-mode");

    localStorage.setItem("theme", "light");
  }
}

//funcion que obtiene el tema del local storage guardado antes y setea el tema de la pagina.
function temaLocalStorage() {
  let tema = localStorage.getItem("theme");
  switch (tema) {
    case "dark":
      iconoToggler.classList.remove("bi-brightness-high-fill");
      iconoToggler.classList.add("bi-moon-stars-fill");
      html.setAttribute("data-bs-theme", "dark");
      body.classList.add("dark-mode");
      break;
    case (null, "light"):
      iconoToggler.classList.add("bi-brightness-high-fill");
      iconoToggler.classList.remove("bi-moon-stars-fill");
      html.setAttribute("data-bs-theme", "light");
      body.classList.remove("dark-mode");
      break;
  }
}

function createModal({
  title = "Modal Title",
  body = "Modal Body",
  footer = "",
  size = "md",
}) {
  const modalId = "dynamicModal";

  // Crear el modal
  const modalHtml = `
      <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true">
        <div class="modal-dialog modal-${size}">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="${modalId}Label">${title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ${body}
            </div>
            <div class="modal-footer">
              ${footer}
            </div>
          </div>
        </div>
      </div>
    `;

  // Insertar el modal en el body
  document.body.insertAdjacentHTML("beforeend", modalHtml);

  // Mostrar el modal
  const modalElement = new bootstrap.Modal(document.getElementById(modalId));
  modalElement.show();

  // Eliminar el modal del DOM cuando se cierra
  document.getElementById(modalId).addEventListener("hidden.bs.modal", () => {
    document.getElementById(modalId).remove();
  });
}

// llamo a la funcion y se la asigno a window.onload (cuando carga la pagina).
window.onload = temaLocalStorage;

//evento click enviado al icono.
let body = document.querySelector("body");
let html = document.getElementsByTagName("html")[0];
let iconoToggler = document.getElementById("iconoToggler");
iconoToggler.addEventListener("click", cambiarIconoSegunTema);

//menu hamburguesa responsive
const nav = document.getElementById("nav");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

for (const b of btnDetalles) {
  console.log(b);
  b.addEventListener("click", () => {
    createModal({
      title: "Detalles del producto",
      body: "",
      footer: "",
      size: "lg",
    });
  });
}
