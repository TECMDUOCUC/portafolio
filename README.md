# Portafolio Web - React + Vite

Sitio web personal desarrollado como una aplicación de una sola página (SPA) con React, Vite y Bootstrap. Incluye enrutamiento con React Router, carga dinámica de contenido desde JSON y pruebas unitarias con Jasmine y Karma.

---

## Requisitos Previos

- **Node.js**: Versión 26 o superior.
- **npm**: Versión 11 o superior.
- **Navegador**: Microsoft Edge o Google Chrome (para ejecutar las pruebas unitarias headless).
---

## Instalación

1. Clonar el repositorio localmente:
   git clone https://github.com/TECMDUOCUC/portafolio

2. Ingresar al directorio del proyecto:
   cd portafolio

3. Instalar las dependencias del proyecto:
   npm install

---

## Ejecución del Entorno de Desarrollo

Para iniciar el servidor local de desarrollo con recarga en vivo (HMR):

npm run dev

El proyecto estará disponible por defecto en:
http://localhost:5173/

---

## Compilación para Producción

Para generar el bundle optimizado para despliegue:

npm run build

Para previsualizar la compilación localmente:

npm run preview

---

## Ejecución de Pruebas Unitarias

El proyecto utiliza Jasmine como framework de pruebas, Karma como ejecutor en navegadores headless, y esbuild para la transpilación de archivos JS.

### 1. Ejecutar las pruebas una sola vez
Ejecuta la suite completa y genera el reporte de cobertura de código:

npm test

### 2. Modo observación (Watch)
Mantiene el proceso activo y vuelve a ejecutar las pruebas automáticamente tras detectar cambios en los archivos:

npm run test:watch

### 3. Reporte de Cobertura de Código
Al ejecutar `npm test`, se genera un informe detallado de cobertura en la carpeta `coverage/`.
Para revisarlo de forma gráfica, abra el archivo:
coverage/html/index.html
