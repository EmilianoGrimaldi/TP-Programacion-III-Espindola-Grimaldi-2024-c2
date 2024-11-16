const express = require("express");
const app = express();
//require("dotenv").config();
process.loadEnvFile();
// Deshabilitar cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});

// Config. EJS
const ejs = require("ejs");
const path = require("path");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Importante para tomar datos del body!
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//Conexion a db
const sequelize = require("./db/sequelize.js");

//Inicio de rutas
const productosRoutes = require("./routes/productos.routes.js");
app.use("/pantalla-productos", productosRoutes);

const abmRoutes = require("./routes/abm.routes.js");
app.use("/abm", abmRoutes);

app.get("/", async (req, res) => {
  res.send("Ruta por defecto");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("App started!");
});
