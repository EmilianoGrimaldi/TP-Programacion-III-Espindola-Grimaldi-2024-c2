<p align="center">
<img src="https://github.com/EmilianoGrimaldi/TP-Programacion-III-Espindola-Grimaldi-2024-c2/blob/main/public/images/1.png" alt="Logo">
</p>

<h1 align="center">GAME REEL</h1>

Bienvenidos a **Game Reel**! Aplicación web de comercio electrónico fullstack con diseño responsivo, pensada para ofrecer una experiencia completa en compra de videojuegos y películas y que cuenta con un panel de administrador para gestionar fácilmente el inventario.

<p align="center">
:globe_with_meridians: :point_right: <a href="https://game-reel-vercel.vercel.app/">Accedé a Game Reel acá!</a> 
</p>


![inicio](https://github.com/user-attachments/assets/d34cc1c0-22a4-44bd-a2c0-05881bcd7b5b)

## :sparkles: Funcionalidades

<h3>Para usuarios:</h3>

- :heavy_plus_sign: Navegar por el catálogo y añadir productos al carrito.  
- :mag: Filtrar por videojuegos o películas para tu comodidad.  
- :shopping_cart: En el carrito podés ajustar la cantidad de productos, eliminarlos o vaciarlo por completo.  
- :receipt: Realizar la compra, generar el ticket y descargarlo en formato **PDF**.
- :waning_crescent_moon: Cambiar entre **modo oscuro** y **modo claro**. 

  
<h3>Para administradores:</h3>

- :clipboard: Gestión completa de los productos: podés agregar, modificar y eliminar artículos.
- :bar_chart: Descargar el listado de ventas realizadas en formato **Excel**.

## :rocket: Tecnologías utilizadas
- **Backend**: Node.js, Express.  
- **Frontend**: EJS, HTML, CSS, Bootstrap. 
- **Base de datos**: MySQL.

## :hammer_and_wrench: Instalalo y ejecutalo localmente

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/EmilianoGrimaldi/TP-Programacion-III-Espindola-Grimaldi-2024-c2.git
   ```
2. **Navegá a la carpeta del proyecto**:
   ```bash
   cd TP-Programacion-III-Espindola-Grimaldi-2024-c2
   ```
3. **Instalá las dependencias**:
   ```bash
   npm install
   ```
4. **Configurá la base de datos**:
   
   - En MySQL creá una base de datos llamada `gamereel`.
   - Creá un archivo `.env` con las siguientes credenciales:
     
   ```.env
        NOMBREBD=gamereel
        USER=root
        PASSWORD=
        HOST=localhost
        PORTBD=3306
        PORT=3000
        CLAVE_SECRETA=01234567891234567890123456789012
    ```

5. **Corré la aplicación**:
   ```bash
   npm run start
   ```

# :bust_in_silhouette: Autores

- _[Emiliano Grimaldi](https://www.linkedin.com/in/emigrima22/)_
- _[Lucas Espindola](https://www.linkedin.com/in/espld/)_
