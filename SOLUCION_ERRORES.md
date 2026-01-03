# 🔧 Solución de Errores de Git

## Problema 1: "Repository not found"

Esto significa que:
- El repositorio no existe en GitHub, o
- El nombre del repositorio es incorrecto, o
- No tienes acceso al repositorio

**Solución:**
1. Ve a https://github.com/xbarnes (o xbarneso) y verifica el nombre exacto del repositorio
2. Asegúrate de que el repositorio existe
3. Verifica que usas el nombre correcto (puede ser `horizon-inmobiliaria` con guión o `horizon_inmobiliaria` con guión bajo)

---

## Problema 2: "remote origin already exists"

**Solución rápida:**

```cmd
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/NOMBRE_CORRECTO.git
```

---

## Pasos para Corregir TODO:

### Paso 1: Ver el remoto actual
```cmd
git remote -v
```

### Paso 2: Eliminar el remoto incorrecto
```cmd
git remote remove origin
```

### Paso 3: Crear el repositorio en GitHub (si no existe)
1. Ve a https://github.com
2. Haz clic en **"+"** → **"New repository"**
3. Nombre: `horizon-inmobiliaria` (con guión, no guión bajo)
4. **NO** marques "Initialize with README"
5. Crea el repositorio

### Paso 4: Añadir el remoto correcto
```cmd
git remote add origin https://github.com/TU_USUARIO/horizon-inmobiliaria.git
```

### Paso 5: Verificar
```cmd
git remote -v
```

### Paso 6: Hacer push
```cmd
git push -u origin main
```

---

## Nota sobre el nombre del repositorio

GitHub suele usar guiones (`-`) en lugar de guiones bajos (`_`):
- ✅ Correcto: `horizon-inmobiliaria`
- ❌ Incorrecto: `horizon_inmobiliaria`

Verifica el nombre exacto en tu GitHub.

