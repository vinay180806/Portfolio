@echo off
echo ========================================
echo    Car Portfolio - Development Setup
echo ========================================
echo.

REM Check if .env files exist
if not exist "backend\.env" (
    echo [1/4] Creating backend .env file...
    copy backend\.env.example backend\.env
    echo Please edit backend\.env with your MongoDB URI and email credentials
    echo.
) else (
    echo [1/4] Backend .env already exists
    echo.
)

if not exist "frontend\.env" (
    echo [2/4] Creating frontend .env file...
    copy frontend\.env.example frontend\.env
    echo.
) else (
    echo [2/4] Frontend .env already exists
    echo.
)

echo [3/4] Starting Backend Server...
start cmd /k "cd backend && npm run dev"

timeout /t 3 /nobreak > nul

echo [4/4] Starting Frontend Server...
start cmd /k "cd frontend && npm run dev"

echo.
echo ========================================
echo    Servers Starting!
echo ========================================
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:5173
echo ========================================
echo.
echo Press any key to exit this window...
pause > nul
