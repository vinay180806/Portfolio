# 🚀 Quick Start Guide

## First Time Setup

### 1. Configure Environment Variables

**Backend:**
```bash
cd backend
cp .env.example .env
```

Edit `backend/.env` and add:
- Your PostgreSQL connection string
- Your email credentials (for contact form)

**Example:**
```env
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/car_portfolio
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
```

**Frontend (Optional):**
```bash
cd frontend
cp .env.example .env
```

### 2. Setup PostgreSQL Database

**Option A - Local PostgreSQL:**
```bash
# Install PostgreSQL if not already installed
# Windows: Download from https://www.postgresql.org/download/windows/
# Mac: brew install postgresql
# Linux: sudo apt-get install postgresql

# Create database
createdb car_portfolio

# Or using psql
psql -U postgres
CREATE DATABASE car_portfolio;
\q
```

**Option B - Cloud PostgreSQL (Recommended for beginners):**

**Supabase (Free tier):**
1. Go to [supabase.com](https://supabase.com)
2. Create account and new project
3. Get connection string from Settings → Database
4. Format: `postgresql://postgres:[YOUR-PASSWORD]@[HOST]:5432/postgres`

**Railway (Free tier):**
1. Go to [railway.app](https://railway.app)
2. Create new project → Add PostgreSQL
3. Copy DATABASE_URL from Variables tab

### 3. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

### 4. Seed Database

```bash
cd backend
node seedData.js
```

This will populate your database with sample projects, experience, and skills.

### 5. Start Development Servers

**Option 1: Using the startup script (Windows)**
```bash
# From the root directory
start-dev.bat
```

**Option 2: Manual start**

Terminal 1 - Backend:
```bash
cd backend
npm run dev
```

Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
```

### 6. Open in Browser

Navigate to `http://localhost:5173`

## 📝 Important Notes

### PostgreSQL Connection Strings

**Local:**
```env
DATABASE_URL=postgresql://username:password@localhost:5432/car_portfolio
```

**Supabase:**
```env
DATABASE_URL=postgresql://postgres:password@db.xxx.supabase.co:5432/postgres
```

**Railway:**
```env
DATABASE_URL=postgresql://postgres:password@containers-us-west-xxx.railway.app:5432/railway
```

### Email Setup (Gmail)

1. Enable 2-factor authentication on your Gmail account
2. Generate an app-specific password:
   - Go to Google Account → Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Update `.env`:
```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
```

### Resume PDF

Place your resume PDF at:
```
frontend/public/resume.pdf
```

## 🎨 Customization

### Update Portfolio Content

1. **Using the seeder:**
   - Edit `backend/seedData.js`
   - Run `node seedData.js`

2. **Using API (Postman/Thunder Client):**
   - POST to endpoints to add data
   - See README.md for all API endpoints

### Change Colors

Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  'neon-blue': '#00f3ff',    // Change these
  'neon-pink': '#ff006e',
  'neon-yellow': '#ffbe0b',
  // ...
}
```

## 🐛 Troubleshooting

### Backend won't start
- Check PostgreSQL is running
- Verify `.env` file exists and has correct DATABASE_URL
- Check port 5000 is not in use
- Run `npm install` in backend folder

### Database connection errors
- Verify PostgreSQL is running: `psql -U postgres`
- Check DATABASE_URL format is correct
- Ensure database exists: `createdb car_portfolio`
- Check firewall/network settings for cloud databases

### Frontend won't start
- Check port 5173 is not in use
- Verify all dependencies installed: `npm install`
- Clear cache: `rm -rf node_modules && npm install`

### Contact form not sending emails
- Verify email credentials in `.env`
- Check Gmail app password is correct (not regular password)
- Look at backend console for error messages

### Sequelize sync errors
- Drop and recreate database if schema changed
- Use `{ force: true }` in seedData.js to reset tables
- Check model definitions match your data

## 📦 Production Build

### Frontend
```bash
cd frontend
npm run build
```
Output in `frontend/dist`

### Deploy
- Frontend: Vercel, Netlify, or any static host
- Backend: Railway, Render, Heroku, or any Node.js host
- Database: Supabase, Railway, Render PostgreSQL, or any managed PostgreSQL

---

**Need help?** Check the main README.md for detailed documentation.
