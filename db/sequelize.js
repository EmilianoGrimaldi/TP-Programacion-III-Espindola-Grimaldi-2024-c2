// conexion db
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  process.env.NOMBREBD,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
    port: process.env.PORTBD,
    dialectOptions: {
      useUTC: false,
    },
    timezone: "America/Argentina/Buenos_Aires",
  }
);

module.exports = sequelize;
