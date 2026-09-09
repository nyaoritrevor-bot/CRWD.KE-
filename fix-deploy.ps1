$ErrorActionPreference = "Stop"

# Navigate to the crwd directory
Set-Location "c:\Users\nyaor\OneDrive\Documents\crwd-phase1\crwd"

Write-Host "Checking git status..." -ForegroundColor Cyan

# Add all changes
git add -A
Write-Host "✓ Files staged" -ForegroundColor Green

# Commit changes
git commit -m "fix: remove platform-specific dependencies for Vercel deployment"
Write-Host "✓ Changes committed" -ForegroundColor Green

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git push origin main
Write-Host "✓ Successfully pushed to GitHub!" -ForegroundColor Green
Write-Host "" 
Write-Host "Vercel will automatically rebuild your deployment..." -ForegroundColor Yellow
