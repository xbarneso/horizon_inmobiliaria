# 🔄 Auto-Deploy en Vercel

## ✅ ¿Cómo Funciona?

Una vez que conectas tu repositorio de GitHub a Vercel, **cada vez que hagas push** a GitHub, Vercel detectará automáticamente los cambios y desplegará una nueva versión.

**No necesitas hacer nada más.** Es automático.

---

## 🚀 Proceso Automático

1. **Haces cambios** en tu código local
2. **Haces commit:**
   ```cmd
   git add .
   git commit -m "Descripción del cambio"
   ```
3. **Haces push a GitHub:**
   ```cmd
   git push origin main
   ```
4. **Vercel detecta el push** automáticamente (en segundos)
5. **Vercel construye** tu proyecto
6. **Vercel despliega** la nueva versión (1-2 minutos)
7. **¡Tu web se actualiza automáticamente!** 🌐

---

## 👀 Ver el Proceso en Vercel

1. Ve a https://vercel.com
2. Entra a tu proyecto `horizon-inmobiliaria`
3. Verás la pestaña **"Deployments"**
4. Ahí verás todos los deploys automáticos
5. Cada push genera un nuevo deployment

---

## ⏱️ Tiempo de Deploy

- **Detección:** Instantánea (segundos después del push)
- **Build:** 1-2 minutos
- **Total:** 2-3 minutos desde el push hasta que está en línea

---

## 📧 Notificaciones

Vercel puede enviarte:
- Email cuando el deploy termine
- Email si hay errores en el build
- Notificaciones en el dashboard

---

## ✅ Verificar que está activado

1. Ve a tu proyecto en Vercel
2. Settings → Git
3. Verifica que el repositorio está conectado
4. El auto-deploy viene activado por defecto

---

## 🔄 Actualización en Tiempo Real

Cada vez que hagas:
```cmd
git push origin main
```

Vercel automáticamente:
1. ✅ Detecta el cambio
2. ✅ Construye el proyecto
3. ✅ Despliega la nueva versión
4. ✅ Actualiza tu URL pública

**No necesitas entrar a Vercel manualmente cada vez.**

---

## 📝 Tip

Puedes ver el estado del deploy en tiempo real en el dashboard de Vercel mientras se construye.

**¡Es así de fácil!** 😊

