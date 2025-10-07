# Professional Services S.A.S.
Este repositorio contiene el código fuente del sitio web Professional Services S.A.S.

## Descripción
Professional Services S.A.S. es una empresa cuyo objeto social es la venta de sus servicios tecnológicos. Está diseñado para ser una plataforma sencilla, moderna y accesible donde los visitantes puedan conocer más sobre los servicios de la empresa.

## Estructura del proyecto
/<br>
├─ assets/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Archivos estáticos personalizados del sitio web<br>
│&nbsp;&nbsp;&nbsp;├─ css/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Hojas de estilos personalizadas<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ carousel.css<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ sign-in.css<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ style.css<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└─ toggle-theme.css<br>
│&nbsp;&nbsp;&nbsp;├─ dist/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Archivos estáticos de Bootstrap<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ css/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Hojas de estilos<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├─ bootstrap.min.css<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├─ bootstrap.min.css.map<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├─ bootstrap.rtl.min.css<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;└─ bootstrap.rtl.min.css.map<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└─ js/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Librerías JavaScript<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ bootstrap.bundle.min.js<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ bootstrap.bundle.min.js.map<br>
│&nbsp;&nbsp;&nbsp;├─ image/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Imágenes personalizadas del sitio web<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ architect.jpeg<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ artificial-inteligence.jpg<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ artificial-inteligence-circle.jpg<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ artist.jpeg<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ cibersecurity.jpg<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ cibersecurity-circle.gif<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ cloud-computing.jpg<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ cloud-computing-circle.jpgg<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ icon.png<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ logo-32x32.png<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ logo-512x512.png<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ movile-application.jpg<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ publicist.jpeg<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ software-architecture.png<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ software-as-service.jpg<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ software-developer.jpeg<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ software-mantaining.jpg<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ source-code.jpg<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ svg.txt<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─ testing.png<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└─ user-experience.jpg<br>
│&nbsp;&nbsp;&nbsp;└─ js/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Librerías JavaScript personalizadas<br>
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ color-modes.js<br>
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ scripts.js<br>
├─ data/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Archivos de datos personalizados<br>
│&nbsp;&nbsp;&nbsp;├─ services.json<br>
│&nbsp;&nbsp;&nbsp;└─ users.json<br>
├─ administration.html&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Página para administración de los servicios<br>
├─ catalog.html&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Página que muestra el catálogo de servicios<br>
├─ contact.html&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Página para que el visitante envíe comentarios<br>
├─ details.html&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Página que muestra la disponibilidad y precio de un servicio<br>
├─ footer.html&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Página con el pié de página del sitio<br>
├─ index.html&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Página inicial del sitio<br>
├─ menu.html&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Página con el menú del sitio<br>
├─ services.html&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Página que muestra las líneas de servicio<br>
├─ sign-in.html&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Página para iniciar sesión como administrador<br>
├─ slider.html&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Página que muestra el slider<br>
├─ team.html&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Página que muestra el equipo de trabajo<br>
└─ who-are-we.html&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Página que muestra quiénes somos<br>

## Archivos principales
|Archivo|Descripción|
|---|---|
|administration.html|Página para administración de los servicios|
|catalog.html|Página que muestra el catálogo de servicios|
|contact.html|Página para que el visitante envíe comentarios|
|details.html|Página que muestra la disponibilidad y precio de un servicio|
|footer.html|Página con el pié de página del sitio|
|index.html|Página inicial del sitio|
|menu.html|Página con el menú del sitio|
|services.html|Página que muestra las líneas de servicio|
|sign-in.html|Página para iniciar sesión como administrador|
|slider.html|Página que muestra el slider|
|team.html|Página que muestra el equipo de trabajo|
|who-are-we.html|Página que muestra quiénes somos|

## Estructura de los archivos de datos
### Archivo de datos del catálogo de servicios: services.json
```json
[
  {
    "availability": {
      "label": "Rótulo en precio y disponibilidad del servicio",
      "quantity": "Cantidad disponible del servicio"
    },
    "description": "Descripción del servicio tanto en el catálogo de servicios como en la disponibilidad y precio del servicio",
    "id": "Código único del servicio",
    "name": "Nombre del servicio tanto en el catálogo de servicios como en la disponibilidad y precio del servicio",
    "picture": {
      "height": "Altura de la imagen tanto en el catálogo de servicios como en la disponibilidad y precio del servicio",
      "path": "Ruta absoluta de la imagen tanto en el catálogo de servicios como en la disponibilidad y precio del servicio",
      "width": "Ancho de la imagen tanto en el catálogo de servicios como en la disponibilidad y precio del servicio"
    },
    "price": {
      "currency": "Moneda en la que se vende el servicio",
      "unit": "Unidad de medida en la que se vende el servicio",
      "value": "Valor unitario del servicio"
    },
    "promotion": "Promoción (Si/No) en la disponibilidad y precio del servicio",
    "title": "Título del servicio en el catálogo de servicios",
    "subtitle": "Subtítulo del servicio en el catálogo de servicios",
    "view": "Dirección del video a mostrar en disponibilidad y precio del servicio"
  },
  {
    ...
  }
]
```
Ejemplo:
```json
[
  {
    "availability": {
      "label": "Consultores disponibles",
      "quantity": "2"
    },
    "description": "La arquitectura de software define la estructura y el diseño de una aplicación antes de escribir una sola línea de código. Una buena arquitectura permite construir sistemas robustos, seguros y fáciles de mantener. Ya sea para aplicaciones distribuidas, microservicios o soluciones empresariales complejas, diseñar con visión estratégica garantiza rendimiento, escalabilidad y evolución a largo plazo.",
    "id": "as",
    "name": "Arquitectura de Software",
    "picture": {
      "height": "333px",
      "path": "./assets/image/software-architecture.png",
      "width": "500px"
    },
    "price": {
      "currency": "COP",
      "unit": "día/consultor",
      "value": "500000"
    },
    "promotion": "No",
    "title": "Arquitectura de software inteligente.",
    "subtitle": "La base sólida para sistemas escalables y eficientes.",
    "view": "https://www.youtube.com/embed/Hnph1a8grrE?start=12&vq=hd1080"
  }
]
```

### Archivo de usuarios administradores: users.json 
```json
[
  {
    "user": "Usuario",
    "password": "Clave"
  }
]
```
Ejemplo:
```json
[
  {
    "user": "admin",
    "password": "1234"
  }
]
```

## Tecnologías utilizadas
|Tecnología|Descripción|
|---|---|
|Bootstrap 5|Framework CSS para diseño responsivo y componentes predefinidos que agilizan el desarrollo|
|CSS 3|Para el diseño y estilo visual del sitio|
|GitHub Pages|Para alojar el sitio web de manera gratuita|
|HTML 5|Para la estructura del sitio web|
|JavaScript|Para interactividad (como formularios de contacto o validaciones)|

## Características
- Datos paramétricos: Tanto el catálogo de servicios como la información de los usuarios se almacenan en archivos JSON. Estos archivos pueden ser modificados siguiendo la estructura establecida, lo que permite actualizar el contenido del sitio de forma dinámica y flexible.
- Diseño Responsivo: El sitio se adapta a diferentes tamaños de pantalla (móviles, tabletas, escritorios).
- Interactividad: Animaciones sutiles y efectos en los elementos del sitio.
- Single Page Application: Este sitio web está construido como una Single Page Application (SPA). Todo el contenido y la estructura de las diferentes secciones se encuentra centralizado en el archivo index.html.<br>En lugar de cargar nuevas páginas al navegar, el sitio muestra, oculta e inyecta dinámicamente secciones dentro de la misma página, lo que permite una experiencia de usuario más fluida y rápida. Esto también reduce las solicitudes al servidor, ya que no se recargan páginas completas, sino que se manipula el contenido desde el front-end utilizando JavaScript y/o técnicas de navegación interna con anclas (#).

## Funcionamiento del sitio web
Este sitio web está diseñado con una arquitectura similar a una Single Page Application (SPA), lo que permite una experiencia de usuario más fluida al evitar recargas completas de página.

### Estructura de carga inicial
Al acceder al sitio, se carga el archivo principal index.html, que actúa como plantilla base. En este archivo se inyectan dinámicamente los siguientes componentes:<br>
- menu.html → cargado en el contenedor &lt;div id="menu"&gt;&lt;/div&gt;<br>
- slider.html (contenido inicial) → cargado en el contenedor &lt;div id="content"&gt;&lt;/div&gt;<br>
- footer.html → cargado en el contenedor &lt;div id="footer"&gt;&lt;/div&gt;<br>

### Navegación
Cuando el usuario navega por otras secciones del sitio, únicamente se actualiza el contenido del contenedor &lt;div id="content"&gt;&lt;/div&gt;. El menú y el pie de página permanecen sin cambios desde la primera carga, lo que mejora el rendimiento y simula el comportamiento de una SPA.

### Almacenamiento de datos
Los datos de servicios y usuarios se manejan a través de archivos JSON:<br>
- services.json: contiene información de los servicios disponibles.<br>
- users.json: contiene las credenciales de los usuarios administradores.<br>

Al ingresar al sitio, estos archivos se cargan y almacenan en el localStorage del navegador.
En el caso de los servicios, cualquier modificación o eliminación actualiza automáticamente los datos almacenados en localStorage.

## Autor
**José Alejandro Bedoya Gil**<br>

## Créditos
Diseñado y desarrollado por José Alejandro Bedoya Gil.<br>
Gracias a tecnologías como Bootstrap, CSS, HTML y JavaScript.

## Visitar Sitio web Professional Services S.A.S.
https://alejandrobedoyagil.github.io/web
