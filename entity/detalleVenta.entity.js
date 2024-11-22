const sequelize = require("../db/sequelize");
const { DataTypes } = require("sequelize");

const DetalleVentaSequelize = sequelize.define(
  "DetalleVenta",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subtotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: "Fecha_venta",
    updatedAt: false,
  }
);

module.exports = DetalleVentaSequelize;
