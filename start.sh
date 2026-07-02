#!/bin/bash

# Barcoda Gym - Quick Start Script

echo "╔════════════════════════════════════════╗"
echo "║  🏋️  Barcoda Gym - البدء السريع        ║"
echo "╚════════════════════════════════════════╝"
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js غير مثبت. الرجاء تثبيت Node.js أولاً"
    exit 1
fi

echo "✅ Node.js مثبت"

# Install dependencies
echo ""
echo "📦 تثبيت المتطلبات..."
cd backend && npm install && cd ..
echo "✅ تم التثبيت"

# Start backend
echo ""
echo "🚀 تشغيل الخادم..."
echo "🔗 http://localhost:5000"
echo ""

cd backend
npm run dev
