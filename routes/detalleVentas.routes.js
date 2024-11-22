const express = require("express");
const router = express.Router();
const VentaSequelize = require("../entity/venta.entity.js");

router.get("/:id", async (req, res) => {
  try {
    const venta = await VentaSequelize.findByPk(req.params.id);

    const productos = await venta.getProductos();

    res.render("ticket", { venta, productos });
  } catch (error) {
    console.error("Error en el servidor:", error);
    res.status(500).send("Error en el servidor");
  }
});

module.exports = router;
