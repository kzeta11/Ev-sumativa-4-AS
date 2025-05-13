const Producto = require('../../../database/models/ProductModel');
const catchAsync = require('../../../utils/catchAsync');
const AppError = require('../../../utils/appError');

exports.crearProducto = catchAsync(async (req, res) => {
  const { nombre, sku, precio, stock } = req.body;

  if (!nombre || !sku || !precio || stock == null) {
    throw new AppError('Todos los campos son obligatorios', 400);
  }

  const existe = await Producto.findOne({ where: { sku } });
  if (existe) throw new AppError('El SKU ya existe', 400);

  const nuevo = await Producto.create({ nombre, sku, precio, stock });
  res.status(201).json(nuevo);
});
/// Obtener todos los productos sin paginacion
exports.obtenerProductosSinPaginacion = catchAsync(async (req, res) => {
  const productos = await Producto.findAll({ where: { activo: true } });
  res.status(200).json(productos);
});

exports.obtenerProductos = catchAsync(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  const productos = await Producto.findAndCountAll({
    where: { activo: true },
    offset,
    limit
  });

  res.status(200).json({
    total: productos.count,
    pagina: page,
    productos: productos.rows
  });
});

exports.actualizarProducto = catchAsync(async (req, res) => {
  const producto = await Producto.findByPk(req.params.id);
  if (!producto) throw new AppError('Producto no encontrado', 404);

  await producto.update(req.body);
  res.sendStatus(204);
});

exports.eliminarProducto = catchAsync(async (req, res) => {
  const producto = await Producto.findByPk(req.params.id);
  if (!producto) throw new AppError('Producto no encontrado', 404);

  await producto.update({ activo: false });
  res.sendStatus(204);
});
