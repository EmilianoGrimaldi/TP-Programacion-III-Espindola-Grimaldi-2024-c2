const sequelize = require("../db/sequelize");
const { DataTypes } = require("sequelize");

const TipoProductoSequelize = sequelize.define(
  "TipoProducto",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = TipoProductoSequelize;
