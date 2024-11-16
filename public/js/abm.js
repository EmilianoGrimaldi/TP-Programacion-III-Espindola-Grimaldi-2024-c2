import {
  cambiarIconoSegunTema,
  temaLocalStorage,
} from "./pantalla-productos.js";

const icon = document.getElementById("icon");
const btnEditar = document.querySelectorAll(".btnEditar");
const btnEliminar = document.querySelectorAll(".btnEliminar");

// llamo a la funcion y se la asigno a window.onload (cuando carga la pagina).
window.onload = temaLocalStorage;

//evento click enviado al icono.
let iconoToggler = document.getElementById("iconoToggler");
iconoToggler.addEventListener("click", cambiarIconoSegunTema);

//menu responsive
const nav = document.getElementById("nav");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

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
    body: `
      <form id="frmAgregarProducto" enctype="multipart/form-data">
      <div class="mb-3 d-flex flex-column align-items-center">
      <label class="mb-2" for="">Seleccione el producto</label>
      <div class="form-check">
      <input
      class="form-check-input"
      type="radio"
      name="descripcion"
      id="rbPelicula"
      value="Pelicula" 
      checked
      />
      <label class="form-check-label" for="rbPelicula">
      Pelicula
      </label>
      </div>
      <div class="form-check">
      <input
      class="form-check-input"
      type="radio"
      name="descripcion"
              id="rbJuego"
              value="Juego"
            />
            <label class="form-check-label" for="rbJuego">
            Juego
            </label>
            </div>
            </div>
            <div class="row mb-3">
            <label for="pNombre" class="col-sm-2 col-form-label">Nombre</label>
            <div class="col-sm-10">
            <input required type="text" class="form-control" id="pNombre" name="nombre"/>
            </div>
            </div>
            <div class="row mb-3">
            <label for="pPrecio" class="col-sm-2 col-form-label">Precio</label>
          <div class="col-sm-10">
          <input required type="number" class="form-control" id="pPrecio" min="0" name="precio"/>
          </div>
          </div>
          <div class="row mb-3">
          <label for="pPortada" class="col-sm-2 col-form-label"
          >Portada</label
          >
          <div class="col-sm-10">
          <input class="form-control" type="file" id="image" name="portada" accept="image/*" required />
          </div>
          </div>
        <div class="d-flex justify-content-center">
          <button type="submit" id="submit" class="btn btn-primary">Agregar</button>
        </div>
      </form>`,
    footer: "",
    size: "md",
  });

  const form = document.getElementById("frmAgregarProducto");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    // Crear FormData directamente desde el formulario
    const formData = new FormData(form);

    // Llamar a la función para enviar los datos
    await insertarDatos(formData);
  });
});

btnEditar.forEach((boton) => {
  boton.addEventListener("click", async () => {
    const idProducto = boton.id;
    const response = await fetch(`http://localhost:3000/abm/${idProducto}`);
    const producto = await response.json();
    if (!response.ok) {
      alert(await producto.json().mensaje);
    }

    createModal({
      title: "Editar producto",
      body: `
        <form id="frmEditarProducto" enctype="multipart/form-data">
          <div class="mb-3 d-flex flex-column align-items-center">
            <label class="mb-2" for="">Seleccione el producto</label>
            <div class="form-check">
              <input
              class="form-check-input"
                type="radio"
                name="descripcion"
                id="rbPelicula"
                value="Pelicula" 
                checked
                />
                <label class="form-check-label" for="rbPelicula">
                Pelicula
                </label>
                </div>
                <div class="form-check">
                <input
                class="form-check-input"
                type="radio"
                name="descripcion"
                id="rbJuego"
                value="Juego"
              />
              <label class="form-check-label" for="rbJuego">
              Juego
              </label>
              </div>
              </div>
              <div class="row mb-3">
              <label for="pNombre" class="col-sm-2 col-form-label">Nombre</label>
            <div class="col-sm-10">
              <input required type="text" class="form-control" id="pNombre" name="nombre" 
              value="${producto.nombre}"/>
              </div>
              </div>
              <div class="row mb-3">
            <label for="pPrecio" class="col-sm-2 col-form-label">Precio</label>
            <div class="col-sm-10">
            <input required type="number" class="form-control" id="pPrecio" min="0" name="precio" value="${producto.precio}"/>
            </div>
            </div>
            <div class="row mb-3">
            <label for="pPortada" class="col-sm-2 col-form-label"
              >Portada</label
            >
            <div class="col-sm-10">
            <input class="form-control" type="file" id="image" name="portada" accept="image/*"/>
            </div>
            </div>
            <div class="d-flex justify-content-center">
            <button type="submit" id="submit" class="btn btn-primary">Editar</button>
            </div>
            </form>`,
      footer: "",
      size: "md",
    });

    const form = document.getElementById("frmEditarProducto");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      await editarProducto(formData, idProducto);
    });
  });
});

btnEliminar.forEach((boton) => {
  boton.addEventListener("click", async () => {
    try {
      const idProducto = boton.id;
      const response = await fetch(`http://localhost:3000/abm/${idProducto}`);
      const result = response.json();
      if (response.ok) {
        await eliminarProducto(idProducto);
      } else {
        alert(result.mensaje);
      }
    } catch (error) {
      alert(error);
    }
  });
});
async function insertarDatos(formData) {
  try {
    const pedido = await fetch("http://localhost:3000/abm", {
      method: "POST",
      body: formData,
    });
    const result = await pedido.json();
    if (pedido.ok) {
      alert(result.mensaje);
      location.reload();
    } else {
      alert(result.mensaje);
    }
  } catch (error) {
    alert(error);
  }
}

async function editarProducto(formData, idProducto) {
  try {
    const pedido = await fetch(`http://localhost:3000/abm/${idProducto}`, {
      method: "PUT",
      body: formData,
    });
    const result = await pedido.json();
    if (pedido.ok) {
      alert(result.mensaje);
      location.reload();
    } else {
      alert(result.mensaje);
    }
  } catch (error) {
    alert(error);
  }
}

async function eliminarProducto(idProducto) {
  try {
    const pedido = await fetch(`http://localhost:3000/abm/${idProducto}`, {
      method: "DELETE",
    });
    const result = await pedido.json();
    if (pedido.ok) {
      alert(result.mensaje);
      location.reload();
    } else {
      alert(result.mensaje);
    }
  } catch (error) {
    alert(error);
  }
}
