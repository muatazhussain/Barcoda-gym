#!/usr/bin/env node

/**
 * Barcoda Gym - نظام إدارة الصالة الرياضية
 * ملف التثبيت والإعداد الموحد
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('\n╔════════════════════════════════════════╗');
console.log('║  🏋️  Barcoda Gym Setup                 ║');
console.log('║  نظام إدارة الصالة الرياضية             ║');
console.log('╚════════════════════════════════════════╝\n');

const dirs = [
  'backend/config',
  'backend/models',
  'backend/routes',
  'backend/controllers',
  'backend/middleware',
  'backend/services',
  'backend/utils',
  'backend/uploads',
  'frontend/src/components',
  'frontend/src/pages',
  'frontend/src/services',
  'frontend/public',
  'mobile/src',
  'desktop/public'
];

// إنشاء المجلدات
console.log('📁 إنشاء المجلدات...');
dirs.forEach(dir => {
  const fullPath = path.join(__dirname, '..', dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`   ✅ ${dir}`);
  }
});

// إنشاء ملف .env
console.log('\n⚙️  إنشاء ملفات الإعدادات...');
const envPath = path.join(__dirname, '..', 'backend', '.env');
if (!fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(
    path.join(__dirname, '..', 'backend', '.env.example'),
    'utf8'
  );
  fs.writeFileSync(envPath, envContent);
  console.log('   ✅ .env');
}

// تثبيت المتطلبات
console.log('\n📦 تثبيت المتطلبات...');
try {
  console.log('   🔄 تثبيت Backend...');
  execSync('cd backend && npm install', { stdio: 'inherit' });
  console.log('   ✅ Backend');
  
  console.log('   🔄 تثبيت Frontend...');
  execSync('cd frontend && npm install', { stdio: 'inherit' });
  console.log('   ✅ Frontend');
} catch (error) {
  console.error('   ❌ خطأ في التثبيت:', error.message);
}

console.log('\n✨ تم التثبيت بنجاح!\n');
console.log('🚀 للبدء:\n');
console.log('   Backend:  cd backend && npm run dev');
console.log('   Frontend: cd frontend && npm start\n');
