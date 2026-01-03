# Script para ayudar con la instalacion de Node.js

Write-Host "=== Instalador de Node.js para Horizon Inmobiliaria ===" -ForegroundColor Cyan
Write-Host ""

# Verificar si Node.js ya esta instalado
$nodePath = Get-Command node -ErrorAction SilentlyContinue
if ($nodePath) {
    Write-Host "Node.js ya esta instalado: $(node --version)" -ForegroundColor Green
    Write-Host "npm version: $(npm --version)" -ForegroundColor Green
    Write-Host ""
    Write-Host "Instalando dependencias del proyecto..." -ForegroundColor Yellow
    npm install
    Write-Host ""
    Write-Host "Listo! Ahora ejecuta: npm run dev" -ForegroundColor Green
    exit 0
}

Write-Host "Node.js no esta instalado en tu sistema." -ForegroundColor Yellow
Write-Host ""

# Intentar abrir el navegador con la pagina de descarga
Write-Host "Abriendo la pagina de descarga de Node.js..." -ForegroundColor Cyan
Start-Process "https://nodejs.org/"

Write-Host ""
Write-Host "INSTRUCCIONES:" -ForegroundColor Yellow
Write-Host "1. Descarga la version LTS (Long Term Support)" -ForegroundColor White
Write-Host "2. Ejecuta el instalador .msi" -ForegroundColor White
Write-Host "3. Acepta todos los valores por defecto" -ForegroundColor White
Write-Host "4. IMPORTANTE: Despues de instalar, CIERRA esta terminal y abre una nueva" -ForegroundColor Red
Write-Host "5. En la nueva terminal, ejecuta este script de nuevo o ejecuta:" -ForegroundColor White
Write-Host "   npm install" -ForegroundColor Cyan
Write-Host "   npm run dev" -ForegroundColor Cyan
Write-Host ""

pause
