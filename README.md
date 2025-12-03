-----

# 🎮 Game Reel - E-commerce de Videojuegos y Películas

**Game Reel** es una aplicación web Fullstack de comercio electrónico diseñada para la venta de videojuegos y películas. Ofrece una experiencia de usuario completa con carrito de compras, generación de tickets en PDF y un panel de administración protegido para la gestión del inventario y reportes en Excel.

## 🚀 Características Principales

### 🛒 Para Clientes

  * **Catálogo Interactivo:** Navegación por productos con filtrado por categorías (Juegos/Películas).
  * **Carrito de Compras:** Agregar, modificar cantidades, eliminar ítems y vaciar carrito.
  * **Checkout y Tickets:** Procesamiento de compras y generación automática de comprobantes en **PDF** (usando `pdf-lib`).
  * **Interfaz Responsiva:** Diseño adaptable con modo oscuro/claro.

### 🛠️ Panel de Administración (ABM)

  * **Gestión de Productos:** Crear, Leer, Actualizar y Eliminar (CRUD) productos del catálogo.
  * **Subida de Imágenes:** Carga de portadas de juegos/películas mediante `multer`.
  * **Reportes:** Exportación del historial de ventas a formato **Excel** (`xlsx`).
  * **Seguridad:** Acceso restringido a las rutas de administración.

## 🛠️ Tecnologías Utilizadas

  * **Backend:** Node.js, Express.js
  * **Frontend:** EJS (Motor de plantillas), HTML5, CSS3, JavaScript.
  * **Base de Datos:** MySQL (con ORM Sequelize).
  * **Librerías Clave:**
      * `sequelize`: ORM para manejo de base de datos.
      * `pdf-lib`: Generación de documentos PDF.
      * `xlsx`: Generación de reportes de Excel.
      * `multer`: Middleware para subida de archivos (imágenes).
      * `ejs`: Renderizado de vistas del servidor.

## ⚙️ Instalación y Configuración Local

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

### 1\. Requisitos Previos

  * Tener instalado **Node.js** y **NPM**.
  * Tener instalado y ejecutando **MySQL**.

### 2\. Clonar el Repositorio

```bash
git clone https://github.com/EmilianoGrimaldi/TP-Programacion-III-Espindola-Grimaldi-2024-c2.git
cd TP-Programacion-III-Espindola-Grimaldi-2024-c2
```

### 3\. Instalar Dependencias

```bash
npm install
```

### 4\. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y configura tus credenciales de base de datos (según tu configuración local de MySQL):

```env
NOMBREBD=gamereel
USER=root
PASSWORD=tu_contraseña
HOST=localhost
PORTBD=3306
PORT=3000
CLAVE_SECRETA=tu_clave_secreta_para_sesiones
```

> **Importante:** Asegúrate de crear una base de datos vacía llamada `gamereel` en tu MySQL antes de iniciar. Sequelize se encargará de crear las tablas (`sync()`).

### 5\. Ejecutar la Aplicación

Para entorno de desarrollo (con reinicio automático):

```bash
npm run start
```

La aplicación estará disponible en: `http://localhost:3000`

## 📂 Estructura del Proyecto

  * `/db`: Configuración de la conexión a MySQL con Sequelize.
  * `/entity`: Definición de modelos y relaciones de la base de datos.
  * `/public`: Archivos estáticos (CSS, Imágenes, Scripts del lado del cliente).
  * `/routes`: Definición de las rutas de la API y vistas (Admin, Carrito, Productos).
  * `/uploads`: Carpeta destino para las imágenes subidas por el administrador.
  * `/views`: Plantillas EJS para el renderizado del frontend.

-----

**Autores:** [Emiliano Grimaldi] & [Lucas Espindola]
