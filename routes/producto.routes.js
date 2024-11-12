const express = require("express");
const router = express.Router();
const Producto = require("../model/producto.js");
const ProductoSequelize = require("../entity/producto.entity.js");

const validarCamposProductos = (req, res, next) => {
  const nombre = req.body.nombre;
  const precio = req.body.precio;
  const imagen = req.body.imagen;
  const descripcion = req.body.descripcion;

  if (typeof nombre !== "string" || nombre.trim() === "") {
    return res.status(400).send("Error, el campo nombre es obligatorio.");
  }
  if (typeof precio !== "number" || precio <= 0) {
    return res
      .status(400)
      .send("Error, el campo precio es obligatorio y debe ser mayor a cero.");
  }
  if (typeof imagen !== "string" || imagen.trim() === "") {
    return res.status(400).send("Error, el campo imagen es obligatorio.");
  }
  if (typeof descripcion !== "string" || descripcion.trim() === "") {
    return res
      .status(400)
      .send(
        "Error, el campo descripción es obligatorio. Indicar el tipo de producto."
      );
  }

  next();
};

router.get("/", async (req, res) => {
  try {
    const productos = await ProductoSequelize.findAll({
      where: {
        activo: false,
      },
    });
    res.render("pantalla-productos", { productos });
  } catch (error) {
    res.send("Error");
  }
});

router.post("/", validarCamposProductos, async (req, res) => {
  try {
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    const imagen = req.body.imagen;
    const descripcion = req.body.descripcion;

    const producto = new Producto();
    producto.nombre = nombre;
    producto.precio = precio;
    producto.imagen = imagen;
    producto.descripcion = descripcion;

    const resultado = await ProductoSequelize.create({
      ...producto,
    });

    res.send(resultado);
  } catch (error) {
    res.send("Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const resultado = await ProductoSequelize.findOne({
      where: {
        id: req.params.id,
        activo: false,
      },
    });

    res.send(resultado);
  } catch (error) {
    res.send("Error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const resultado = await ProductoSequelize.update(
      {
        ...req.body,
      },
      {
        where: {
          id: req.params.id,
          activo: false,
        },
      }
    );
    res.send(resultado);
  } catch (error) {
    res.send("Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const resultado = ProductoSequelize.update(
      { activo: true },
      { where: { id: req.params.id } }
    );
    res.send(resultado);
  } catch (error) {
    res.send("Error");
  }
});

module.exports = router;
