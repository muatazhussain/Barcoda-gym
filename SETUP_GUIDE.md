# دليل التثبيت الشامل 📚

## الخطوة 1: تحضير البيئة ⚙️

### Windows
1. تحميل Node.js من https://nodejs.org/
2. تثبيت MySQL من https://www.mysql.com/
3. فتح Command Prompt

### Linux/Mac
```bash
# تثبيت Node.js
sudo apt install nodejs npm

# تثبيت MySQL
sudo apt install mysql-server
```

## الخطوة 2: استنساخ المشروع 📥

```bash
git clone https://github.com/muatazhussain/Barcoda-gym.git
cd Barcoda-gym
```

## الخطوة 3: تثبيت المتطلبات 📦

### الطريقة السريعة (موصى بها)
```bash
node install.js
```

### الطريقة اليدوية
```bash
cd backend
npm install
cd ../frontend
npm install
cd ..
```

## الخطوة 4: إعداد قاعدة البيانات 🗄️

### 4.1 إنشاء قاعدة البيانات
```sql
CREATE DATABASE barcoda_gym CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 4.2 إعداد متغيرات البيئة
```bash
cp backend/.env.example backend/.env
```

### 4.3 تحرير ملف .env
```bash
# Linux/Mac
nano backend/.env

# Windows - استخدم محرر نصوص (Notepad)
```

**محتوى .env:**
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=barcoda_gym
PORT=5000
NODE_ENV=development
JWT_SECRET=your_secret_key_here
```

## الخطوة 5: تشغيل التطبيق 🚀

### Windows
```bash
start.bat
```

### Linux/Mac
```bash
chmod +x start.sh
./start.sh
```

### الوصول
- Backend: http://localhost:5000
- Health Check: http://localhost:5000/api/health

## استكشاف الأخطاء 🔧

### المشكلة: "Cannot connect to MySQL"
**الحل:**
- تأكد من تشغيل MySQL
- تحقق من بيانات الدخول في .env
- أعد تشغيل خدمة MySQL

### المشكلة: "Port 5000 already in use"
**الحل:**
```bash
# تغيير المنفذ في .env
PORT=5001
```

### المشكلة: "npm: command not found"
**الحل:**
- أعد تثبيت Node.js
- أعد تشغيل Terminal

## خطوات ما بعد التثبيت 📋

1. ✅ قم بإنشاء حساب مسؤول
2. ✅ أضف صالة الرياضية الأولى
3. ✅ ابدأ بإضافة الأعضاء
4. ✅ أعد الاشتراكات

## الدعم الفني 💬

إذا واجهت أي مشاكل:
1. تحقق من سجل الأخطاء
2. ابحث في Issues على GitHub
3. اتصل بفريق الدعم
