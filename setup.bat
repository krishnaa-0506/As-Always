@echo off
echo ========================================
echo   AsAlways - Setup Script
echo ========================================
echo.

echo [1/4] Installing dependencies...
call npm install

echo.
echo [2/4] Generating Prisma client...
call npx prisma generate

echo.
echo [3/4] Setting up database...
call npx prisma db push

echo.
echo [4/4] Starting development server...
echo.
echo ========================================
echo   Setup Complete!
echo   Opening http://localhost:3000
echo ========================================
echo.

start http://localhost:3000
call npm run dev