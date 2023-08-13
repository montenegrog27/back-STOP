require("dotenv").config();
require("pg");

const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, BDD } = process.env;
console.log(DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, BDD);
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${BDD}`,
  {
    logging: console.log, // set to console.log to see the raw SQL queries
    native: false,
  }
);

// Importa los modelos aquí y configúralos si es necesario
const PrecioModel = require("./models/price")(sequelize, Sequelize);
const SaleModel = require("./models/sale")(sequelize, Sequelize);
const NewsModel = require("./models/news")(sequelize, Sequelize);

module.exports = {
  sequelize, // Exporta solo la conexión
};
