# 🏎️ Car-Themed Personal Portfolio

> A high-performance, full-stack portfolio website built for developers who love cars. Featuring a unique dashboard-inspired UI, smooth framer motion animations, and a robust PERN stack backend.

![Project Banner](frontend/public/og-image.png)

## ✨ Features

- **🏎️ Automotive UI Design**: Custom dashboard aesthetic with neon accents, speedometer gauges, and racing-inspired typography.
- **⚡ High Performance**: Powered by React + Vite for lightning-fast load times.
- **🎨 Premium Animations**: Smooth transitions and interactive elements using **Framer Motion**.
- **📱 Fully Responsive**: Optimized experience across desktop, tablet, and mobile devices.
- **🛠️ Dynamic Content Management**:
    - **Projects**: Showcase your work with rich details and tech stacks.
    - **Experience**: Timeline view of your professional journey.
    - **Skills**: Categorized skill gauges with proficiency levels.
- **📬 Functional Contact Form**: Integrated email notifications using **Nodemailer**.
- **🔒 Secure Backend**: Express.js REST API with input validation and PostgreSQL database.

## 🛠️ Tech Stack

### Frontend
<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</p>

### Backend
<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" alt="Sequelize" />
</p>

## 🚀 Getting Started

Follow these steps to get your engine running locally.

### Prerequisites

- **Node.js** (v18+)
- **PostgreSQL** (v12+) or a cloud database (Supabase/Railway)
- **Git**

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd car-portfolio
```

### 2. Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file based on the example:

```bash
cp .env.example .env
```

**Configure your `.env` variables:**

| Variable | Description |
| :--- | :--- |
| `DATABASE_URL` | PostgreSQL connection string (e.g., `postgresql://user:pass@localhost:5432/car_portfolio`) |
| `PORT` | API Server port (Default: `5000`) |
| `EMAIL_SERVICE` | Email provider (e.g., `gmail`) |
| `EMAIL_USER` | Your email address for sending notifications |
| `EMAIL_PASSWORD` | App-specific password (not your login password) |

### 3. Database Setup

Create the PostgreSQL database and seed initial data:

```bash
# Create database (if using local Postgres)
createdb car_portfolio

# Seed the database with sample data
node seedData.js
```

Start the backend server:

```bash
npm run dev
# Server running at http://localhost:5000
```

### 4. Frontend Setup

Open a new terminal, navigate to the frontend directory, and install dependencies:

```bash
cd ../frontend
npm install
```

Create a `.env` file (optional if defaults work):

```bash
cp .env.example .env
```

**Frontend `.env`:**

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend development server:

```bash
npm run dev
# App running at http://localhost:5173
```

## 📡 API Documentation

Most endpoints return standard JSON responses.

### Projects
- `GET /api/projects` - Retrieve all projects
- `POST /api/projects` - Add a new project
- `PUT /api/projects/:id` - Update a project

### Experience
- `GET /api/experience` - Retrieve work history
- `POST /api/experience` - Add new experience

### Skills
- `GET /api/skills` - List all skills
- `GET /api/skills/category/:category` - Filter skills (frontend/backend/tools)

### Contact
- `POST /api/contact` - Submit a specific contact form message

## 📂 Project Structure

```
car-portfolio/
├── backend/                # Node.js + Express API
│   ├── config/             # Database configuration
│   ├── models/             # Sequelize models (Project, Skill, etc.)
│   ├── routes/             # API routes
│   └── seedData.js         # Initial data population script
├── frontend/               # React + Vite Application
│   ├── src/
│   │   ├── components/     # Reusable UI components (Hero, Navbar, etc.)
│   │   ├── assets/         # Static assets
│   │   └── App.jsx         # Main application entry
│   └── tailwind.config.js  # Theme configuration
└── README.md               # Project documentation
```

## 🎨 Customization

### Changing the Color Scheme
Edit `frontend/tailwind.config.js` to modify the neon theme:

```javascript
colors: {
  'neon-blue': '#00f3ff',
  'neon-pink': '#ff006e',
  // ...
}
```

### Updating Resume
Replace the file at `frontend/public/resume.pdf` with your current resume.

## 🚢 Deployment

### Frontend
Deploy the `frontend` directory to **Vercel** or **Netlify**.
- Set Build Command: `npm run build`
- Set Output Directory: `dist`
- **Environment Variable**: `VITE_API_URL` (Your production backend URL)

### Backend
Deploy the `backend` directory to **Railway**, **Render**, or **Heroku**.
- **Environment Variables**: `DATABASE_URL`, `EMAIL_USER`, `EMAIL_PASSWORD`

## 📄 License

This project is licensed under the MIT License - feel free to use this template for your own portfolio!

---

<p align="center">
  Built with 💻 and 🏎️
</p>
