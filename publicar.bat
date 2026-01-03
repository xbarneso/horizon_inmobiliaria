@echo off
echo ========================================
echo Publicar Horizon Inmobiliaria en GitHub
echo ========================================
echo.

echo Paso 1: Verificando Git...
git --version
if errorlevel 1 (
    echo ERROR: Git no esta instalado!
    echo Descarga Git de: https://git-scm.com/download/win
    pause
    exit
)

echo.
echo Paso 2: Verificando estado del repositorio...
git status

echo.
echo Paso 3: Verificando remoto de GitHub...
git remote -v

echo.
echo ========================================
echo INSTRUCCIONES:
echo ========================================
echo 1. Crea un repositorio en github.com
echo 2. Ejecuta estos comandos (reemplaza TU_USUARIO):
echo.
echo    git remote add origin https://github.com/TU_USUARIO/horizon-inmobiliaria.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3. Luego ve a vercel.com para publicar la web
echo.
echo Ver PUBLICAR_GITHUB_CMD.md para instrucciones completas
echo.
pause

