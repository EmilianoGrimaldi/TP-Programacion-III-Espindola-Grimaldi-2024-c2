//require("dotenv").config();
process.loadEnvFile();
const express = require("express");
const app = express();

// Importante para tomar datos del body!
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//const productosRoutes = require("./routes/producto.routes.js");

//app.use("/producto", productosRoutes);

const sequelize = require("./db/sequelize.js");
const productoSequelize = require("./entity/producto.entity.js");

app.get("/", async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  res.send("Ruta por defecto");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("App started!");
});
