# Fix npm installation issues
Write-Host "Fixing npm installation issues..." -ForegroundColor Green

# Clean up problematic directories
Write-Host "Cleaning up node_modules..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force "node_modules" -ErrorAction SilentlyContinue
}
if (Test-Path "package-lock.json") {
    Remove-Item -Force "package-lock.json" -ErrorAction SilentlyContinue
}

# Clear npm cache
Write-Host "Clearing npm cache..." -ForegroundColor Yellow
npm cache clean --force

# Install readable-stream first
Write-Host "Installing readable-stream..." -ForegroundColor Yellow
npm install readable-stream

# Install dependencies without sharp (problematic package)
Write-Host "Installing dependencies without sharp..." -ForegroundColor Yellow
npm install --ignore-scripts

# Try to install sharp with specific configuration
Write-Host "Installing sharp with specific configuration..." -ForegroundColor Yellow
$env:npm_config_sharp_binary_host = "https://github.com/lovell/sharp-libvips/releases/download"
$env:npm_config_sharp_libvips_binary_host = "https://github.com/lovell/sharp-libvips/releases/download"
npm install sharp --ignore-scripts

Write-Host "Installation complete!" -ForegroundColor Green
Write-Host "If sharp still fails, you can run the app without image processing features." -ForegroundColor Cyan