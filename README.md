# Horizon Inmobiliaria - Website

Sitio web moderno y elegante para Horizon Inmobiliaria en Barcelona.

## 🚀 Características

- ✨ Diseño moderno y elegante
- 📱 Totalmente responsivo (móvil, tablet, desktop)
- 🎬 Video de fondo aéreo de Barcelona
- 🎨 Animaciones suaves al hacer scroll
- 🏠 Carrusel de imágenes para cada propiedad
- 📸 Modal con detalles completos de propiedades
- 👥 Información de los socios fundadores
- ⚡ Construido con React + Vite

## 🛠️ Tecnologías

- **React 18** - Framework principal
- **Vite** - Build tool y dev server
- **CSS3** - Estilos modernos con variables CSS
- **HTML5** - Estructura semántica

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/horizon-inmobiliaria.git
cd horizon-inmobiliaria
```

2. Instala las dependencias:
```bash
npm install
```

3. Agrega el video de Barcelona:
   - Coloca el archivo `barcelona-aerial.mp4` en la carpeta `public/video/`

4. Agrega las imágenes de los fundadores (opcional):
   - Coloca las imágenes en `public/images/founders/`
   - `daniel-garcia.jpg` y `christian-vela.jpg`

## 🚀 Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre tu navegador en: `http://localhost:5173`

## 📦 Producción

Construye para producción:

```bash
npm run build
```

Previsualiza la build:

```bash
npm run preview
```

## 🌐 Deployment

### GitHub Pages

1. Actualiza `vite.config.js` con tu base path:
```js
export default defineConfig({
  base: '/horizon-inmobiliaria/', // nombre de tu repo
  plugins: [react()],
})
```

2. Construye el proyecto:
```bash
npm run build
```

3. Configura GitHub Pages en la configuración del repositorio apuntando a la carpeta `dist`

### Vercel / Netlify

Simplemente conecta tu repositorio GitHub y el deployment será automático.

## 📁 Estructura del Proyecto

```
horizon_inmobiliaria/
├── public/
│   ├── images/
│   │   └── founders/
│   ├── video/
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Properties.jsx
│   │   ├── PropertyModal.jsx
│   │   ├── ImageCarousel.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Personalización

Los colores principales se definen en `src/index.css`:

```css
:root {
  --color-primary: #1a1a1a;
  --color-accent: #7BAFD4; /* Azul claro del logo */
  --color-text: #333333;
  /* ... */
}
```

## 📝 Licencia

© Horizon Inmobiliaria 2024

## 👥 Equipo

- **Daniel García** - Socio Fundador
- **Christian Vela Ruiz** - Socio Fundador

## 📧 Contacto

- 📞 Teléfono: 93 148 58 87
- 📱 Móvil: 633 28 77 63 / 613 00 61 35
- ✉️ Email: administrador@horizoninmobiliaria.com
- 📍 Dirección: C/ de la Diputació, 188 Barcelona
