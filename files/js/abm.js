import {
  cambiarIconoSegunTema,
  temaLocalStorage,
} from "./pantalla-productos.js";

const icon = document.getElementById("icon");
const btnEditar = document.getElementsByClassName("btnEditar");

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

icon.addEventListener("click", () => {
  createModal({
    title: "Agregar producto",
    body: "",
    footer: "",
    size: "lg",
  });
});

for (const b of btnEditar) {
  b.addEventListener("click", () => {
    createModal({
      title: "Editar producto",
      body: "",
      footer: "",
      size: "lg",
    });
  });
}

// llamo a la funcion y se la asigno a window.onload (cuando carga la pagina).
window.onload = temaLocalStorage;

//evento click enviado al icono.
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
