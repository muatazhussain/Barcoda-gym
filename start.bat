@echo off
REM Barcoda Gym - Windows Quick Start

echo ╔════════════════════════════════════════╗
echo ║  🏋️  Barcoda Gym - البدء السريع        ║
echo ╚════════════════════════════════════════╝
echo.

REM Check Node.js
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js غير مثبت
    pause
    exit /b 1
)

echo ✅ Node.js مثبت
echo.

REM Install dependencies
echo 📦 تثبيت المتطلبات...
cd backend
call npm install
cd ..
echo ✅ تم التثبيت
echo.

REM Start backend
echo 🚀 تشغيل الخادم...
echo 🔗 http://localhost:5000
echo.

cd backend
npm run dev
