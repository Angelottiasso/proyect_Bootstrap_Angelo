# ⚡ Angelotti_Service - Soluciones en Domótica y Mantenimiento Eléctrico

Este repositorio contiene el código fuente del proyecto **Angelotti_Service**, un sitio web tipo *Landing Page* multipantalla desarrollado como evaluación práctica para la asignatura de **Técnicas Avanzadas de Diseño Web** (Segundo Año de Ingeniería de Sistemas, UBA).

El objetivo principal de este proyecto es demostrar el dominio de la **estructura semántica de HTML5** y la implementación de diseño responsivo (RWD) utilizando el framework **Bootstrap 5**, cumpliendo con los estándares actuales de desarrollo Frontend.

---

## 🛠️ Tecnologías y Herramientas Utilizadas

* **HTML5:** Uso estricto de etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) para mejorar la accesibilidad y el SEO.
* **Bootstrap 5:** Framework principal para la maquetación mediante el sistema de grillas (Grid System) y componentes UI interactivos, prescindiendo de hojas de estilo CSS personalizadas externas.
* **JavaScript (Bootstrap Bundle):** Utilizado de forma nativa a través de la librería de Bootstrap para el manejo de interactividad (Carrusel, Menú móvil, Acordeón).

---

## 📂 Estructura del Sitio Web y Funcionalidades

El proyecto está compuesto por cuatro (4) pantallas interconectadas mediante una barra de navegación global:

### 1. Inicio (`index.html` - Landing Page)
Actúa como la página principal de conversión.
* **Navbar Sticky:** Menú de navegación fijo en la parte superior.
* **Slider (Carrusel):** Implementado con el componente `Carousel` de Bootstrap, muestra imágenes representativas con transición automática.
* **Secciones de Información:** 4 bloques de contenido estructurados con el sistema de columnas de Bootstrap (Grid de 12 columnas) combinando texto e imágenes responsivas (`img-fluid`).
* **Formulario de Contacto:** Incluye validaciones nativas (`required`) en los campos de Nombre, Email y Mensaje, utilizando las clases `form-control` para la estética.

### 2. Catálogo de Servicios (`servicios.html`)
Despliega las soluciones técnicas ofrecidas por la empresa.
* Utiliza el componente **Cards** integrado con **List Groups** (`list-group-flush`) para mostrar las características de cada servicio (Diagnóstico, Tableros, IoT) de forma limpia y modular.

### 3. Portafolio de Proyectos (`proyectos.html`)
Muestra la experiencia aplicada en el área de ingeniería.
* Diseñado con una **rejilla de Tarjetas (Card Grid)**, optimizada para adaptarse a dispositivos móviles, tablets y monitores de escritorio. Incluye etiquetas (`badges`) para categorizar los proyectos.

### 4. Preguntas Frecuentes (`faq.html`)
Sección de soporte técnico y resolución de dudas.
* Implementa el componente interactivo **Accordion** de Bootstrap, permitiendo a los usuarios expandir y colapsar las respuestas dinámicamente, mejorando la experiencia de usuario (UX) al evitar la sobrecarga visual de texto.

---

## 🚀 Instalación y Uso

Dado que el proyecto es estático y no requiere de un servidor backend o preprocesadores, su ejecución es directa:

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone [https://github.com/Angelottiasso/proyect_Bootstrap_Angelo.git](https://github.com/Angelottiasso/proyect_Bootstrap_Angelo.git)
