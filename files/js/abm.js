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
    body: `<form>
      <div class="mb-3 d-flex flex-column align-items-center">
        <label class="mb-2" for="">Seleccione el producto</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Pelicula
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Juego
          </label>
        </div>
      </div>
      <div class="row mb-3">
        <label for="pNombre" class="col-sm-2 col-form-label">Nombre</label>
        <div class="col-sm-10">
          <input required type="text" class="form-control" id="pNombre" />
        </div>
      </div>
      <div class="row mb-3">
        <label for="pPrecio" class="col-sm-2 col-form-label">Precio</label>
        <div class="col-sm-10">
          <input required type="number" class="form-control" id="pPrecio" min="0"/>
        </div>
      </div>
      <div class="row mb-3">
        <label for="pPortada" class="col-sm-2 col-form-label"
          >Url portada</label
        >
        <div class="col-sm-10">
          <input required type="url" class="form-control" id="pPortada" />
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-primary">Agregar</button>
      </div>
    </form>`,
    footer: "",
    size: "md",
  });
});

for (const b of btnEditar) {
  b.addEventListener("click", () => {
    createModal({
      title: "Editar producto",
      body: `<form>
      <div class="row mb-3">
        <label for="pNombre" class="col-sm-2 col-form-label">Nombre</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="pNombre" />
        </div>
      </div>
      <div class="row mb-3">
        <label for="pPrecio" class="col-sm-2 col-form-label">Precio</label>
        <div class="col-sm-10">
          <input type="number" class="form-control" id="pPrecio" min="0"/>
        </div>
      </div>
      <div class="row mb-3">
        <label for="pPortada" class="col-sm-2 col-form-label"
          >Url portada</label
        >
        <div class="col-sm-10">
          <input type="url" class="form-control" id="pPortada" />
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-primary">Confirmar</button>
      </div>
    </form>`,
      footer: "",
      size: "md",
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
