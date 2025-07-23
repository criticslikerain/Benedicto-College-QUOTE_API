@echo off
echo 🚀 Benedicto College Quote API - Quick Deploy Script
echo.

echo ✅ Checking if git is initialized...
if not exist .git (
    echo 📁 Initializing git repository...
    git init
    echo ✅ Git repository initialized
) else (
    echo ✅ Git repository already exists
)

echo.
echo 📦 Adding all files to git...
git add .

echo.
echo 💾 Committing files...
git commit -m "Deploy: Benedicto College Quote API ready for production"

echo.
echo 🌐 Ready for deployment!
echo.
echo Choose your deployment method:
echo.
echo 1. GitHub + Netlify (Recommended)
echo    - Push to GitHub: git remote add origin YOUR_REPO_URL
echo    - Then: git push -u origin main
echo    - Connect to Netlify via web interface
echo.
echo 2. Direct Netlify Deploy
echo    - Run: netlify login
echo    - Then: netlify deploy --prod
echo.
echo 3. Drag & Drop
echo    - Create ZIP of project folder
echo    - Drag to netlify.com deploy area
echo.
echo 📖 See DEPLOYMENT.md for detailed instructions
echo.
pause
