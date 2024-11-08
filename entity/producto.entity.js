const sequelize = require("../db/sequelize");
const { DataTypes } = require("sequelize");

const ProductoSequelize = sequelize.define(
  "Producto",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    urlImagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    activo: {
      defaultValue: false,
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = ProductoSequelize;
