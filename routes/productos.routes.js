const express = require("express");
const router = express.Router();
const Producto = require("../model/producto.js");
const ProductoSequelize = require("../entity/producto.entity.js");

router.get("/", async (req, res) => {
  try {
    await ProductoSequelize.sync();
    const productos = await ProductoSequelize.findAll({
      where: {
        activo: true,
      },
    });
    res.render("pantalla-productos", { productos });
  } catch (error) {
    res
      .status(400)
      .json({ mensaje: "No se pueden mostrar los productos", status: 400 });
  }
});

/* router.post("/", validarCamposProductos, uploads.single("portada"), async (req, res) => {
  try {
    const nombre = req.body.nombre;
    const precio = parseFloat(req.body.precio);
    const portada = req.file.filename;
    const descripcion = req.body.descripcion;

    const producto = new Producto();
    producto.nombre = nombre;
    producto.precio = precio;
    producto.portada = portada;
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
        activo: true,
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
 */
module.exports = router;
