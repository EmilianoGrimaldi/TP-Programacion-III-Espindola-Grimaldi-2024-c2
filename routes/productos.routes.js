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

module.exports = router;
