const express = require('express');
const app = express();
require('dotenv').config();

const productosRouter = require('./src/modules/product/routers/productRouters');

app.use(express.json());
app.use('/api/productos', productosRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;
