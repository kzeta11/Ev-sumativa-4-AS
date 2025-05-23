# Ev-sumativa-4-AS

Este es el repositorio de la Evaluación Sumativa 4 de la asignatura **Arquitectura de Sistemas**, correspondiente al desarrollo de una API RESTful de productos.

---

## 📋 Requisitos

- Node.js **v22.1.0** (o superior)
- Cuenta en [Filess.io](https://filess.io) con base de datos **MariaDB**
- Postman

---

## 🚀 Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/kzeta11/Ev-sumativa-4-AS.git
```

### 2. Ingresar al directorio

```bash
cd api-productos
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Crear archivo `.env` con tus variables de entorno

Ejemplo de `.env`:

```env
PORT=3000
NODE_ENV=development
JWT_SECRET=arquitecturaDeSistemasJWT12345Secret

DB_HOST=tu_host.filess.io
DB_PORT=tu_puerto
DB_NAME=nombre_basedatos
DB_USER=usuario
DB_PASSWORD=clave_segura
```

> ⚠️ Reemplaza los valores con los datos reales entregados por [Filess.io](https://filess.io)

---

### 5. Colocar datos semilla

Este comando eliminará y recreará la tabla `productos`, e insertará **51 registros aleatorios válidos**.

```bash
npm run seed
```

---

### 6. Ejecutar la aplicación

```bash
npm start
```

> La API se levantará en: [http://localhost:3000](http://localhost:3000)

---

## 📬 Endpoints disponibles

| Método | Ruta                              | Descripción                             |
|--------|-----------------------------------|-----------------------------------------|
| POST   | `/api/productos`                  | Crear producto                          |
| GET    | `/api/productos`                  | Obtener todos los productos (sin paginación) |
| GET    | `/api/productos/paginado`         | Obtener productos paginados (`?page=X&limit=Y`) |
| GET    | `/api/productos/:id`              | Obtener producto por ID                 |
| PATCH  | `/api/productos/:id`              | Actualizar uno o más campos del producto |
| DELETE | `/api/productos/:id`              | Marcar producto como inactivo (no eliminar) |

---

## 🔐 Autenticación

Todos los endpoints requieren un token JWT en el header `Authorization`:

```
Authorization: Bearer TU_TOKEN
```

---

## 📦 Pruebas con Postman

Importa la colección de Postman y reemplaza el valor de la variable `{{TOKEN}}` con tu JWT para autenticarte.

Puedes encontrar los endpoints listos para usar en `Postman_API_Productos.json`.

---

Desarrollado por [@kzeta11](https://github.com/kzeta11)