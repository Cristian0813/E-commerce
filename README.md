# E-commerce_Frontend

E-commerce_Frontend es una aplicación web que ofrece a los clientes una experiencia de compra en línea. Permite explorar, seleccionar productos y realizar transacciones. La aplicación se conecta al [E-commerce_Backend](https://github.com/Cristian0813/E-commerce_Backend.git) para gestionar la lógica del servidor y garantizar una experiencia fluida. Utiliza una API externa para obtener información actualizada sobre productos, precios, inventario y envío.

**_Estos son solo ejemplos básicos, ajusta y amplía según las necesidades específicas de tu proyecto._**

## Demo

https://fakestorecommerce.netlify.app
*(Esta página de inicio de noticias ha sido cuidadosamente diseñada con un enfoque en la simplicidad y funcionalidad. Además, constituye un proyecto valioso para perfeccionar las habilidades en CSS Grid. )*

## Requisitos
Asegúrate de tener Node.js y npm instalados en tu máquina.
[Node.js](https://nodejs.org/en) y que se ejecute con
[npm](https://www.npmjs.com/) **(Normalmente viene con Node.js)**

## Instalación
1. Clona este repositorio

    ```bash
    git clone https://github.com/Cristian0813/E-commerce_Frontend.git
    ```
1. Navega al directorio del proyecto ```cd E-commerce_Frontend```
1. Instala las dependencias de Vite ```npm install```
1. Ejecutar el servidor de desarrollo con ```npm run dev```
1. Construir la aplicación para producción con ```npm run build```

Esto iniciará la aplicación en modo de desarrollo. Abre http://localhost:3000 en tu navegador para ver la aplicación. Ahora se clona el repositorio [Backend](https://github.com/Cristian0813/E-commerce_Backend.git) y sigue las instrucciones

## Dependencias a instalar
Asegúrate de instalar las siguientes dependencias antes de ejecutar la aplicación:

### [React Router Dom](https://reactrouter.com/)
Instala React Router Dom para gestionar la navegación en la aplicación.

```bash
npm install react-router-dom
```
Consulta la documentación de [React Router Dom](https://reactrouter.com/en/main) para obtener más información.

### [Bootstrap](https://getbootstrap.com/) con [Vite](https://vitejs.dev/)
Integra Bootstrap 5.3.2 con Vite para una interfaz de usuario atractiva y receptiva.
```bash
npm install react-router-dom
``` 
Sigue la [documentación de Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/vite/) y la [documentación de Vite](https://vitejs.dev/guide/) para una configuración óptima.

### [Fontawesome](https://fontawesome.com/docs/web/use-with/react/) 
Añade Font Awesome para obtener iconos impresionantes en tu aplicación.
```bash
npm i --save @fortawesome/fontawesome-svg-core
``` 
Por favor, revisa la [documentación de Font Awesome](https://fontawesome.com/docs/web/use-with/react/) para más detalles.

### [Redux](https://redux.js.org/) con [React Redux](https://react-redux.js.org/)
Incorpora Redux y React Redux para gestionar el estado de la aplicación de manera eficiente.
```bash
npm install @reduxjs/toolkit react-redux
```
Consulta la [documentación de Redux](https://redux.js.org/introduction/getting-started) y [React Redux](https://react-redux.js.org/introduction/getting-started) para obtener información detallada sobre su implementación.

**Nota:** _Para Redux y React Redux, es necesario instalar ambos paquetes complementarios.
Estas dependencias son esenciales para el funcionamiento adecuado de la aplicación. Asegúrate de revisar las respectivas documentaciones para una implementación correcta._

### [Axios](https://axios-http.com/)
Utiliza Axios para realizar solicitudes HTTP en tu aplicación.
```bash
npm install axios
```
Sigue la [documentación de Axios](https://axios-http.com/docs/intro) para entender cómo integrarlo en tu proyecto.

## Contribuir

¡Agradecemos tu interés en contribuir al desarrollo de esta aplicación! Sigue estos pasos para colaborar de manera efectiva:

1. **Fork del Proyecto:** Haz un fork del repositorio desde la interfaz de GitHub. Esto creará una copia del proyecto en tu cuenta.

1. **Crea una Nueva Rama:** Crea una nueva rama para tu funcionalidad o corrección utilizando el siguiente comando:

    ```bash
    git checkout -b feature/nueva-funcionalidad
    ```

   Asegúrate de utilizar un nombre descriptivo para tu rama.

1. **Realiza tus Cambios:** Implementa las modificaciones necesarias en tu nueva rama. Añade, modifica o elimina el código según sea necesario.

1. **Haz Commit de tus Cambios:** Utiliza el siguiente comando para realizar un commit con un mensaje descriptivo:

    ```bash
    git commit -m 'Agrega nueva funcionalidad'
    ```

1. **Haz Push a la Rama:** Sube tus cambios a tu fork del repositorio en GitHub:

    ```bash
    git push origin feature/nueva-funcionalidad
    ```

1. **Abre un Pull Request (PR):** Visita la página de tu repositorio en GitHub y selecciona la rama que acabas de crear. Haz clic en el botón "New Pull Request" para abrir un nuevo PR.

   - Asegúrate de proporcionar información detallada sobre los cambios realizados.
   - Si es relevante, menciona problemas relacionados o funcionalidades afectadas.
   - Sé claro y conciso en tu descripción para facilitar la revisión del PR.

1. **Espera la Revisión:** Los colaboradores revisarán tu PR y proporcionarán comentarios o sugerencias. Sé receptivo a las sugerencias y realiza ajustes según sea necesario.

¡Gracias por tu contribución! Tu esfuerzo ayuda a mejorar esta aplicación y beneficia a toda la comunidad.

## Ejemplo de Uso de Axios para Obtener Datos de la API

Recuerda reemplazar 'http://localhost:3000/apiRouter/products' con la URL real de tu API. Este ejemplo muestra cómo utilizar useEffect para realizar la solicitud al montar el componente y actualiza el estado local con los datos obtenidos. Puedes adaptar este código según las necesidades específicas de tu aplicación.

#### _Productos.jsx_
```jsx
const response = await axios.get('http://localhost:3000/apiRouter/products', { withCredentials: true });
```
#### _Producto.jsx_
```jsx
const response = await axios.get(`http://localhost:3000/apiRouter/products/${id}`, { withCredentials: true });
```

## Authors

- [@Cristian Arias](https://www.github.com/Cristian0813)


## Documentation
<div align="left">
    <a href="https://es.react.dev/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  /></a>
    <img width="12" />
    <a href="https://vitejs.dev/"><img src="https://skillicons.dev/icons?i=vite" height="40" alt="vite logo"  /></a>
    <img width="12" />
    <a href="https://getbootstrap.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" height="40" alt="bootstrap logo"  /></a>
     <img width="12" />
    <a href="https://redux.js.org/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height="40" alt="redux logo"  /></a>
     <img width="12" />
    <a href="https://axios-http.com/"><img src="https://axios-http.com/assets/logo.svg" height="30" alt="axios logo"  /></a>
</div>

## License
Este proyecto está bajo la [Licencia MIT](https://choosealicense.com/licenses/mit/)