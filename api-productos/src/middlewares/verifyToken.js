const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');
require('dotenv').config();

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new AppError('Token no proporcionado', 401);
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded; // puedes usarlo luego si necesitas verificar roles
    next();
  } catch (err) {
    throw new AppError('Token inválido o expirado', 401);
  }
};
