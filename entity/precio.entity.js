const sequelize = require("../db/sequelize");
const { DataTypes } = require("sequelize");

const PrecioSequelize = sequelize.define(
  "Precio",
  {
    idPrecio: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = PrecioSequelize;
