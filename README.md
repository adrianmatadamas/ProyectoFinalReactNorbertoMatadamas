# Ecommerce App (Proyecto final React Js Coderhouse)

## Descripción

Esta es una aplicación de comercio electrónico desarrollada con React.js para vender productos de un rubro a elección. La aplicación permite a los usuarios navegar por los productos, ver detalles, agregar productos al carrito y realizar una compra.

## Componentes

- **NavBar**: Barra de navegación principal con enlaces a las categorías y al carrito.
- **CartWidget**: Icono del carrito de compras que muestra la cantidad de productos en el carrito.
- **ItemListContainer**: Contenedor para la lista de productos.
- **ItemList**: Lista de productos.
- **ItemDetailContainer**: Contenedor para los detalles de un producto específico.
- **ItemDetail**: Detalle de un producto que incluye descripción, foto, precio y opciones de cantidad.
  - **ItemQuantitySelector**: Selector de cantidad de producto.
  - **Description**: Descripción del producto.
  - **AddItemButton**: Botón para agregar el producto al carrito.
- **Checkout**: Proceso de compra.
  - **Brief**: Detalle de la compra.

## User Story / Brief

- Un usuario debe poder ingresar, navegar por los productos e ir a sus detalles.
- Desde el detalle se debe poder ver la descripción, foto y precio, e ingresarlo al carrito.
- Una vez que el carrito tenga al menos un producto, se deberá visualizar un listado compacto de la orden con el precio total.
- Al ingresar su nombre, apellido, teléfono y e-mail (ingresándolo dos veces para corroborar que sea correcto), debe activarse el botón de ‘realizar compra’.
- Al clickear ‘realizar compra’ debe guardarse en la base de datos una orden que tenga todos los productos, la fecha y dar feedback del número de orden.

## Requisitos Base

### Inicio

- Ruta base ‘/’:
  - Visualizar un conjunto de productos disponibles para la compra.
  - Acceso visible al carrito en la ruta `/cart`.
  - Menú desplegable con categorías que navega a `/categories/:categoryId` mostrando productos de esa categoría.

### Flow

- Al clickear un ítem, navegar a `/item/:id` donde se ve la descripción del producto.
- Si el producto no existe en Firebase, mostrar un mensaje adecuado.

### Firebase

- Implementar al menos dos colecciones:
  - **items**: Catálogo completo con link para foto, precio unitario, descripción y categoría.
  - **orders**: Órdenes generadas que incluyen los productos, descripciones y precios al momento de la compra.

##
Configurar credenciales de Firebase en el archivo de configuración, en `src/services/firebase.js`:
   ```javascript
   // src/firebaseConfig.js
   const firebaseConfig = {
  apiKey: "tu_api_key",
  authDomain: "tu_auth_domain",
  projectId: "tu_project_id",
  storageBucket: "tu_storage_bucket",
  messagingSenderId: "tu_messaging_sender_id",
  appId: "tu_app_id"
};

export default firebaseConfig;

   export default firebaseConfig;

## Uso
- Ejecutar npm install
- Ejecutar npm run dev
- Navega a `http://localhost:3000` para ver la aplicación.
- Usa el menú para navegar por categorías y ver productos.
- Agrega productos al carrito y procede al checkout para completar la compra.
