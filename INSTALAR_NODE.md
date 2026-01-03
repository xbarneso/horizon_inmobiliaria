# Instalación de Node.js

Para ejecutar este proyecto, necesitas instalar Node.js primero.

## Opción 1: Instalación Manual (Recomendada)

1. **Descarga Node.js:**
   - Ve a: https://nodejs.org/
   - Descarga la versión LTS (Long Term Support)
   - Ejecuta el instalador `.msi` descargado

2. **Durante la instalación:**
   - Acepta todos los valores por defecto
   - Asegúrate de que la opción "Add to PATH" esté marcada

3. **Verifica la instalación:**
   - Abre una nueva terminal (importante: debe ser nueva para que tome el PATH actualizado)
   - Ejecuta: `node --version`
   - Deberías ver algo como: `v20.x.x`

## Opción 2: Usando el instalador directo

Puedes descargar directamente desde:
- Windows 64-bit: https://nodejs.org/dist/v20.11.0/node-v20.11.0-x64.msi

## Una vez instalado Node.js:

1. Abre una nueva terminal PowerShell en esta carpeta
2. Ejecuta: `npm install`
3. Ejecuta: `npm run dev`
4. Abre tu navegador en: http://localhost:5173

## Nota Importante:

Después de instalar Node.js, **debes cerrar y abrir una nueva terminal** para que los comandos `node` y `npm` estén disponibles.

