# 🚀 Desplegar en Vercel (PASO A PASO)

## Paso 1: Subir código a GitHub

Primero asegúrate de que tu código está en GitHub:

```bash
git remote add origin https://github.com/TU_USUARIO/horizon-inmobiliaria.git
git branch -M main
git push -u origin main
```

## Paso 2: Ir a Vercel

1. Abre https://vercel.com en tu navegador
2. Haz clic en **"Sign Up"** o **"Log In"**
3. Selecciona **"Continue with GitHub"**
4. Autoriza Vercel para acceder a tus repositorios

## Paso 3: Importar Proyecto

1. Haz clic en **"Add New..."** → **"Project"**
2. En la lista de repositorios, busca `horizon-inmobiliaria`
3. Haz clic en **"Import"**

## Paso 4: Configuración (Vercel lo hace automáticamente)

Vercel detectará:
- ✅ Framework Preset: **Vite**
- ✅ Build Command: `npm run build` (automático)
- ✅ Output Directory: `dist` (automático)
- ✅ Install Command: `npm install` (automático)

**No necesitas cambiar nada**, solo haz clic en **"Deploy"**

## Paso 5: ¡Espera 1-2 minutos!

Vercel construirá y desplegará tu sitio automáticamente.

## Paso 6: ¡Listo! 🎉

Al terminar verás:
- ✅ URL de producción: `https://horizon-inmobiliaria.vercel.app`
- ✅ Estado: "Ready"
- ✅ Puedes hacer clic para ver tu web en vivo

## 🔄 Actualizaciones Futuras

Cada vez que hagas cambios y subas a GitHub:
```bash
git add .
git commit -m "Descripción del cambio"
git push
```

Vercel detectará automáticamente los cambios y desplegará una nueva versión en segundos.

## 📧 Personalizar Dominio (Opcional)

Si quieres un dominio propio (ej: `horizoninmobiliaria.com`):

1. En Vercel, ve a tu proyecto
2. Settings → Domains
3. Añade tu dominio personalizado
4. Sigue las instrucciones para configurar DNS

**¡Tu web estará en línea y accesible públicamente!** 🌐

