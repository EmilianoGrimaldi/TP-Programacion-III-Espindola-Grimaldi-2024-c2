const sequelize = require("../db/sequelize");
const { DataTypes } = require("sequelize");

const VentaSequelize = sequelize.define("Venta", {
  idVenta: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idProducto: {
    type: DataTypes.INTEGER,
    allowNull: false, // NOT NULL
  },
  idPrecio: {
    type: DataTypes.FLOAT,
    allowNull: false, // NOT NULL
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false, // NOT NULL
  },
});

module.exports = VentaSequelize;
