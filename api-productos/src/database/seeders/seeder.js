const sequelize = require('../config');
const Producto = require('../models/ProductModel');
const { faker } = require('@faker-js/faker');

const runSeed = async () => {
  try {
    await sequelize.sync({ force: true });

    const productos = [];

    for (let i = 0; i < 51; i++) {
      productos.push({
        nombre: faker.commerce.productName().slice(0, 50),
        sku: faker.string.uuid().slice(0, 30),
        precio: faker.number.int({ min: 100, max: 10000 }),
        stock: faker.number.int({ min: 0, max: 500 }),
        activo: true
      });
    }

    await Producto.bulkCreate(productos);
    console.log('✅ Productos insertados correctamente');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error al insertar productos:', err);
    process.exit(1);
  }
};

runSeed();
