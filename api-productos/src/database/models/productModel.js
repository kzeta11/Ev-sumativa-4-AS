const { DataTypes } = require('sequelize');
const sequelize = require('../config');
const { v4: uuidv4 } = require('uuid');

const Producto = sequelize.define('Producto', {
  id: {
    type: DataTypes.STRING,
    defaultValue: () => uuidv4(),
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  sku: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 1 }
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 0 }
  },
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
});

module.exports = Producto;
