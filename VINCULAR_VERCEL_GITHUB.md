# 🔗 Vincular Vercel con GitHub

## Si ya tienes cuenta de Vercel

### Opción 1: Vincular desde Vercel

1. **Ve a:** https://vercel.com
2. **Inicia sesión** en tu cuenta
3. Ve a **Settings** (arriba derecha, icono de tu perfil)
4. En el menú lateral, busca **"Git"** o **"Integrations"**
5. Haz clic en **"GitHub"** o **"Connect GitHub"**
6. Autoriza Vercel para acceder a tus repositorios
7. Selecciona los permisos que quieres dar (recomendado: todos los repositorios o solo los que selecciones)
8. Haz clic en **"Authorize"** o **"Install"**

### Opción 2: Vincular al crear un proyecto

1. Ve a https://vercel.com
2. Haz clic en **"Add New..."** → **"Project"**
3. Si no está conectado, verás un botón **"Connect GitHub"** o **"Import Git Repository"**
4. Haz clic en **"Connect GitHub"**
5. Autoriza Vercel
6. Selecciona los repositorios que quieres conectar
7. Una vez conectado, verás tus repositorios de GitHub

---

## Verificar que está conectado

1. Ve a **Settings** → **Git** o **Integrations**
2. Deberías ver **GitHub** listado como conectado
3. Si no está, haz clic en **"Connect"** o **"Add"**

---

## Si no aparece la opción de GitHub

1. Ve a **Settings** → **Git**
2. Busca **"GitHub"** en la lista
3. Si no está, haz clic en **"Add Git Provider"** o **"Connect Git Provider"**
4. Selecciona **GitHub**
5. Sigue los pasos de autorización

---

## Una vez conectado

1. Ve al **Dashboard** de Vercel
2. Haz clic en **"Add New..."** → **"Project"**
3. Ahora verás todos tus repositorios de GitHub
4. Busca `horizon-inmobiliaria`
5. Haz clic en **"Import"**

---

## Permisos necesarios

Vercel necesita estos permisos de GitHub:
- ✅ Acceso a repositorios (para leer el código)
- ✅ Webhooks (para detectar cambios automáticamente)
- ✅ Deployments (para publicar)

Todo esto se configura automáticamente al autorizar.

---

## Problemas comunes

### "GitHub not connected"
- Ve a Settings → Git
- Conecta GitHub manualmente

### "No repositories found"
- Verifica que autorizaste el acceso a repositorios
- Asegúrate de que el repositorio existe en GitHub
- Verifica que estás usando la cuenta correcta de GitHub

### "Permission denied"
- Ve a GitHub → Settings → Applications → Authorized OAuth Apps
- Verifica que Vercel está autorizado
- Si no, vuelve a autorizar desde Vercel

---

## ✅ Checklist

- [ ] Cuenta de Vercel activa
- [ ] GitHub conectado en Settings
- [ ] Repositorios visibles en Vercel
- [ ] Listo para importar proyecto

