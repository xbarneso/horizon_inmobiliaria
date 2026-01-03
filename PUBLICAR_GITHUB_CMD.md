# 📤 Publicar en GitHub desde Cero - Guía CMD

## Paso 1: Verificar que Git está instalado

Abre CMD (Command Prompt) y ejecuta:

```cmd
git --version
```

Si aparece la versión, está instalado. Si no, descárgalo de: https://git-scm.com/download/win

---

## Paso 2: Ir a la carpeta del proyecto

```cmd
cd C:\Users\xbarn\horizon_inmobiliaria
```

---

## Paso 3: Verificar el estado de Git

```cmd
git status
```

Si ya tienes commits (como "Initial commit"), continúa al Paso 4.
Si ves "fatal: not a git repository", inicializa primero:

```cmd
git init
git add .
git commit -m "Initial commit: Horizon Inmobiliaria website"
```

---

## Paso 4: Crear repositorio en GitHub

1. Ve a https://github.com en tu navegador
2. Inicia sesión (o crea cuenta si no tienes)
3. Haz clic en el botón **"+"** (arriba derecha) → **"New repository"**
4. Nombre: `horizon-inmobiliaria` (o el que prefieras)
5. Descripción: "Sitio web Horizon Inmobiliaria"
6. **NO** marques "Add a README file"
7. Haz clic en **"Create repository"**

---

## Paso 5: Conectar tu repositorio local con GitHub

En CMD, ejecuta estos comandos (reemplaza TU_USUARIO con tu usuario de GitHub):

```cmd
git remote add origin https://github.com/TU_USUARIO/horizon-inmobiliaria.git
```

Ejemplo si tu usuario es "xbarn":
```cmd
git remote add origin https://github.com/xbarn/horizon-inmobiliaria.git
```

---

## Paso 6: Cambiar a la rama main (si es necesario)

```cmd
git branch -M main
```

---

## Paso 7: Subir el código a GitHub

```cmd
git push -u origin main
```

**Si te pide usuario y contraseña:**
- Usuario: Tu usuario de GitHub
- Contraseña: Usa un **Personal Access Token** (no tu contraseña normal)
  - Crea uno en: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
  - Genera nuevo token con permisos "repo"
  - Úsalo como contraseña

---

## Paso 8: Verificar que se subió

Ve a https://github.com/TU_USUARIO/horizon-inmobiliaria

Deberías ver todos tus archivos allí.

---

## Paso 9: Publicar la Web en Vercel (GRATIS)

1. Ve a https://vercel.com
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en **"Add New..."** → **"Project"**
4. Selecciona el repositorio `horizon-inmobiliaria`
5. Haz clic en **"Import"**
6. **NO cambies nada** (Vercel detecta todo automáticamente)
7. Haz clic en **"Deploy"**
8. Espera 1-2 minutos
9. ¡Tu web estará en línea! 🌐

---

## 📝 Comandos Resumidos (Copia y Pega)

```cmd
cd C:\Users\xbarn\horizon_inmobiliaria
git status
git remote add origin https://github.com/TU_USUARIO/horizon-inmobiliaria.git
git branch -M main
git push -u origin main
```

*(Recuerda cambiar TU_USUARIO por tu usuario real de GitHub)*

---

## ❓ Problemas Comunes

### Error: "fatal: remote origin already exists"
```cmd
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/horizon-inmobiliaria.git
```

### Error: "Authentication failed"
- Crea un Personal Access Token en GitHub
- Úsalo como contraseña en lugar de tu contraseña normal

### Error: "Updates were rejected"
```cmd
git pull origin main --allow-unrelated-histories
git push -u origin main
```

---

## ✅ Listo!

Una vez completados estos pasos:
- ✅ Tu código estará en GitHub
- ✅ Podrás publicarlo en Vercel (2 minutos)
- ✅ Tendrás tu web accesible públicamente

