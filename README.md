# Resumen del Proyecto

Proyecto de aplicación de comercio electrónico para una tienda de zapatos. Su objetivo principal es permitir a los usuarios visualizar el catálogo de productos, acceder a detalles específicos de cada artículo y gestionar un carrito de compras.

## Características Principales

* **Visualización del Catálogo:** La página de inicio presenta una selección de zapatos disponibles, mostrando información básica como imagen, nombre, descripción breve y precio.
* **Detalles del Producto:** Al seleccionar un zapato, se accede a una página con información detallada, incluyendo múltiples imágenes en un carrusel, descripción extendida y especificaciones. Se ofrece la opción de seleccionar la cantidad deseada.
* **Carrito de Compras:** Los usuarios pueden añadir productos al carrito desde la página de detalles. Se implementó un sistema de gestión del carrito que permite agregar, modificar la cantidad y eliminar artículos. Un indicador visual en la navegación muestra el número de artículos en el carrito y facilita el acceso a la página del carrito.
* **Gestión del Carrito:** La página del carrito muestra los artículos seleccionados, permitiendo ajustar las cantidades y eliminar productos. Se presenta un resumen del pedido con el subtotal, costos de envío, impuestos y el total a pagar.
* **Diseño Adaptativo:** La interfaz de usuario se ha diseñado para ofrecer una experiencia consistente en diversos dispositivos, utilizando un enfoque de diseño responsivo con Tailwind CSS.
* **Integración de Datos:** La información de los zapatos se obtiene a través de una API local (`http://localhost:3000/zapatos`). Se implementaron funciones para la recuperación de la lista completa de productos y los detalles de un producto específico mediante su identificador.
* **Contexto de la API:** Se utiliza un contexto (`ApiContext`) para centralizar el acceso a los datos de la API y la función de obtención de productos por ID, facilitando su uso en diferentes componentes.

## Tecnologías Utilizadas

* **React:** Librería de JavaScript utilizada para la construcción de la interfaz de usuario interactiva.
* **Tailwind CSS:** Framework de CSS de utilidad-primera empleado para el diseño y la aplicación de estilos.
* **Fetch API:** Interfaz para la realización de solicitudes HTTP para la obtención de datos desde la API.
* **TypeScript:** Superset de JavaScript que añade tipado estático para mejorar la mantenibilidad del código.
* **Context API:** Mecanismo de React para la gestión y compartición de estado a través de la jerarquía de componentes.
* **React Router DOM:** Librería para la implementación de la navegación entre las diferentes vistas de la aplicación.

## Resumen

El proyecto es una aplicación web básica de comercio electrónico centrada en la venta de calzado. Permite a los usuarios explorar productos, visualizar detalles y gestionar un carrito de compras. Se utilizaron tecnologías modernas como React para la interfaz, Tailwind CSS para el diseño y se implementó la gestión de estado mediante Context API y la comunicación con una API para la obtención de datos.
