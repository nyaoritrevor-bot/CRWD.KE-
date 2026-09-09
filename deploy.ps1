# Deploy script for pushing to GitHub
$ErrorActionPreference = "Stop"

# Navigate to the crwd directory
Set-Location "c:\Users\nyaor\OneDrive\Documents\crwd-phase1\crwd"

# Configure git with HTTPS
Write-Host "Configuring git for HTTPS deployment..." -ForegroundColor Cyan

# Remove old SSH remote if exists
git remote remove origin 2>$null

# Add HTTPS remote
git remote add origin "https://github.com/nyaoritrevor-bot/CRWD.KE-.git"

# Set up credential helper
git config credential.helper store

# Ensure we're on main branch
git branch -M main

# Push to GitHub
Write-Host "Pushing code to GitHub..." -ForegroundColor Cyan
git push -u origin main --no-verify

Write-Host "✓ Successfully pushed to GitHub!" -ForegroundColor Green
Write-Host "Your repository is available at: https://github.com/nyaoritrevor-bot/CRWD.KE-" -ForegroundColor Green
