const express = require("express");
const app = express();

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

//require("dotenv").config();
process.loadEnvFile();

// Importante para tomar datos del body!
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//Conexion a db
const sequelize = require("./db/sequelize.js");

//Inicio de rutas
const productosRoutes = require("./routes/producto.routes.js");
app.use("/pantalla-productos", productosRoutes);

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
