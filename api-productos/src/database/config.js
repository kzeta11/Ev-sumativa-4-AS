const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.MARIADB_DATABASE,
  process.env.MARIADB_USER,
  process.env.MARIADB_PASSWORD,
  {
    host: process.env.MARIADB_HOST,
    port: process.env.MARIADB_PORT,
    dialect: 'mariadb',
    dialectOptions: {
      connectTimeout: 10000 // espera 10 segundos
    },
    logging: false
  }
);

module.exports = sequelize;
