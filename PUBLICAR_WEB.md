# 🌐 Cómo Publicar la Web para que sea Accesible

Subir el código a GitHub **NO** hace que la web sea accesible públicamente. Solo guarda el código.

## 🚀 Opciones para Publicar la Web (GRATIS)

### ✅ Opción 1: Vercel (MÁS FÁCIL - Recomendado)

**Ventajas:**
- ✅ Gratis
- ✅ Automático (detecta Vite/React)
- ✅ URL personalizada (tu-sitio.vercel.app)
- ✅ Se actualiza automáticamente al hacer cambios
- ✅ HTTPS incluido

**Pasos:**

1. Ve a https://vercel.com
2. Inicia sesión con tu cuenta de GitHub (si no tienes, créala)
3. Haz clic en **"Add New Project"** o **"New Project"**
4. Selecciona tu repositorio `horizon-inmobiliaria`
5. Vercel detectará automáticamente:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Haz clic en **"Deploy"**
7. **¡Listo!** En 1-2 minutos tendrás tu web en línea con una URL como:
   - `https://horizon-inmobiliaria.vercel.app`

**Tu web será accesible públicamente en esa URL** ✅

---

### ✅ Opción 2: Netlify

**Ventajas:**
- ✅ Gratis
- ✅ Similar a Vercel
- ✅ Muy fácil de usar

**Pasos:**

1. Ve a https://netlify.com
2. Inicia sesión con GitHub
3. Haz clic en **"Add new site"** → **"Import an existing project"**
4. Selecciona tu repositorio
5. Configuración:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Haz clic en **"Deploy site"**
7. **¡Listo!** URL tipo: `https://horizon-inmobiliaria.netlify.app`

---

### ✅ Opción 3: GitHub Pages (Gratis pero más complejo)

**Ventajas:**
- ✅ Gratis
- ✅ Integrado con GitHub
- ❌ Más pasos de configuración

**Pasos:**

1. Primero, actualiza `vite.config.js`:
```js
export default defineConfig({
  base: '/horizon-inmobiliaria/', // Nombre de tu repo
  plugins: [react()],
})
```

2. Instala el plugin de GitHub Pages:
```bash
npm install --save-dev gh-pages
```

3. Añade a `package.json` en la sección `scripts`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. Construye y despliega:
```bash
npm run deploy
```

5. Ve a tu repositorio en GitHub → **Settings** → **Pages**
6. Selecciona la rama `gh-pages` como source
7. Tu web estará en: `https://TU_USUARIO.github.io/horizon-inmobiliaria/`

---

## 🎯 ¿Cuál Elegir?

**Recomendación: VERCEL** porque:
- Es el más fácil
- Funciona inmediatamente sin configuración
- Detección automática de Vite
- Muy rápido

## 📝 Resumen

| Servicio | Dificultad | Tiempo | URL Personalizada |
|----------|-----------|--------|-------------------|
| Vercel | ⭐ Fácil | 2 min | ✅ Sí |
| Netlify | ⭐ Fácil | 3 min | ✅ Sí |
| GitHub Pages | ⭐⭐ Media | 10 min | ✅ Sí (con usuario.github.io) |

**Todos son GRATIS para proyectos personales.**

¿Quieres que te ayude a configurar alguno de estos?

