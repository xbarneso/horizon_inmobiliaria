# 📤 Publicar en GitHub - Instrucciones

## Paso 1: Crear el repositorio en GitHub

1. Ve a https://github.com
2. Haz clic en el botón **"New"** o **"+"** → **"New repository"**
3. Nombre del repositorio: `horizon-inmobiliaria` (o el que prefieras)
4. Descripción: "Sitio web de Horizon Inmobiliaria - React + Vite"
5. **No** marques "Initialize with README" (ya tenemos uno)
6. Haz clic en **"Create repository"**

## Paso 2: Conectar y subir el código

Ejecuta estos comandos en la terminal (ya en la carpeta del proyecto):

```bash
# Añade el repositorio remoto (reemplaza TU_USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/horizon-inmobiliaria.git

# Cambia a la rama main (GitHub usa main por defecto)
git branch -M main

# Sube el código
git push -u origin main
```

## Paso 3: Publicar en GitHub Pages (Opcional)

### Opción A: GitHub Pages Automático

1. Ve a tu repositorio en GitHub
2. Ve a **Settings** → **Pages**
3. En "Source", selecciona **"GitHub Actions"**
4. GitHub detectará automáticamente Vite y configurará el deployment

### Opción B: GitHub Pages Manual

1. Actualiza `vite.config.js` y descomenta la línea del base path:
```js
base: '/horizon-inmobiliaria/', // Usa el nombre de tu repositorio
```

2. Construye el proyecto:
```bash
npm run build
```

3. Crea una rama `gh-pages`:
```bash
git checkout -b gh-pages
git add dist
git commit -m "Add dist for GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

4. En GitHub → Settings → Pages, selecciona la rama `gh-pages` como source

## 🌐 Alternativa: Vercel (Más fácil y recomendado)

1. Ve a https://vercel.com
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en **"Add New Project"**
4. Selecciona tu repositorio `horizon-inmobiliaria`
5. Vercel detectará automáticamente que es un proyecto Vite
6. Haz clic en **"Deploy"**
7. ¡Listo! Tu sitio estará en línea en unos minutos

## 🎉 ¡Listo!

Una vez subido a GitHub, puedes:
- Compartir el código con otros
- Hacer cambios y subirlos con `git push`
- Publicar el sitio en GitHub Pages o Vercel
- Colaborar con otros desarrolladores

