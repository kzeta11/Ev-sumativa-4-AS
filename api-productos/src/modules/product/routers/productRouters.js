const { Router } = require('express');
const {
  crearProducto,
  obtenerProductosSinPaginacion,
  obtenerProductos,
  actualizarProducto,
  eliminarProducto
} = require('../controllers/productController');
const verifyToken = require('../../../middlewares/verifyToken');

const router = Router();

router.post('/', verifyToken, crearProducto);
router.get('/', verifyToken, obtenerProductosSinPaginacion);
router.get('/paginado', verifyToken, obtenerProductos);
router.patch('/:id', verifyToken, actualizarProducto);
router.delete('/:id', verifyToken, eliminarProducto);

module.exports = router;
