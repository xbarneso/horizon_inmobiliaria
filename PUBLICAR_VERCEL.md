# 🚀 Publicar en Vercel - Paso a Paso

## ✅ Requisito Previo
Asegúrate de que tu código ya está en GitHub. Si no, sigue primero la guía de GitHub.

---

## 📋 PASOS EN VERCEL:

### Paso 1: Ir a Vercel
Abre tu navegador y ve a:
**https://vercel.com**

---

### Paso 2: Iniciar Sesión
1. Haz clic en **"Sign Up"** o **"Log In"** (arriba derecha)
2. Selecciona **"Continue with GitHub"**
3. Autoriza Vercel para acceder a tus repositorios de GitHub
4. Completa el proceso de inicio de sesión

---

### Paso 3: Importar Proyecto
1. Una vez dentro de Vercel, verás el dashboard
2. Haz clic en el botón grande **"Add New..."** (arriba derecha)
3. Selecciona **"Project"** del menú desplegable

---

### Paso 4: Seleccionar Repositorio
1. Verás una lista de tus repositorios de GitHub
2. Busca **`horizon-inmobiliaria`** (o el nombre que le pusiste)
3. Haz clic en el botón **"Import"** al lado del repositorio

---

### Paso 5: Configuración (Vercel lo hace automáticamente)
Vercel detectará automáticamente:
- ✅ **Framework Preset:** Vite
- ✅ **Build Command:** `npm run build`
- ✅ **Output Directory:** `dist`
- ✅ **Install Command:** `npm install`

**NO NECESITAS CAMBIAR NADA** - Todo está configurado automáticamente.

---

### Paso 6: Deploy
1. Revisa la configuración (debería estar todo correcto)
2. Haz clic en el botón azul grande **"Deploy"**
3. Espera 1-2 minutos mientras Vercel construye y despliega tu sitio

---

### Paso 7: ¡Listo! 🎉
Verás una pantalla de éxito con:
- ✅ **"Congratulations!"**
- ✅ Una URL como: `https://horizon-inmobiliaria.vercel.app`
- ✅ Estado: "Ready"

**¡Tu web está en línea y accesible públicamente!** 🌐

---

## 🔗 Tu URL Pública

Tu web estará disponible en una URL tipo:
- `https://horizon-inmobiliaria.vercel.app`
- O `https://horizon-inmobiliaria-xyz123.vercel.app`

Puedes compartir esta URL con cualquiera.

---

## 🔄 Actualizar la Web en el Futuro

Cada vez que hagas cambios:

1. En CMD:
```cmd
cd C:\Users\xbarn\horizon_inmobiliaria
git add .
git commit -m "Descripción del cambio"
git push
```

2. Vercel detectará automáticamente los cambios
3. Desplegará una nueva versión en segundos
4. Tu web se actualizará automáticamente

---

## ⚙️ Configuración Avanzada (Opcional)

### Cambiar el nombre del dominio
1. En Vercel, ve a tu proyecto
2. Settings → Domains
3. Añade un dominio personalizado (ej: `horizoninmobiliaria.com`)

### Variables de Entorno
Si necesitas variables de entorno:
1. Settings → Environment Variables
2. Añade las variables necesarias

---

## ❓ Problemas Comunes

### "Build Failed"
- Verifica que el código esté en GitHub
- Asegúrate de que `package.json` tiene el script `build`

### "Repository not found"
- Verifica que el repositorio existe en GitHub
- Asegúrate de haber dado permisos a Vercel

### "Deployment failed"
- Revisa los logs en Vercel
- Verifica que el build funciona localmente: `npm run build`

---

## ✅ Checklist

Antes de empezar:
- [ ] Código subido a GitHub
- [ ] Cuenta de Vercel creada
- [ ] GitHub conectado a Vercel

Durante el deploy:
- [ ] Repositorio seleccionado
- [ ] Configuración automática detectada
- [ ] Deploy iniciado

Después:
- [ ] URL recibida
- [ ] Web accesible públicamente
- [ ] Todo funciona correctamente

---

## 🎯 Resumen Rápido

1. Ve a **vercel.com**
2. Inicia sesión con **GitHub**
3. Haz clic en **"Add New Project"**
4. Selecciona tu repositorio
5. Haz clic en **"Deploy"**
6. ¡Espera 2 minutos!
7. **¡Tu web está en línea!** 🌐

**Es literalmente hacer clic en 3 botones.** 😊

