@echo off
setlocal enabledelayedexpansion

cd /d "c:\Users\nyaor\OneDrive\Documents\crwd-phase1\crwd"

echo Checking git config...
git config --list | find "remote.origin.url" >nul
if !errorlevel! equ 0 (
    echo Removing old remote...
    git remote remove origin 2>nul
)

echo Setting HTTPS remote...
git remote add origin https://github.com/nyaoritrevor-bot/CRWD.KE-.git

echo Staging files...
git add -A

echo Committing...
git commit -m "fix: remove platform-specific dependencies for Vercel deployment" || echo "Nothing to commit"

echo Pushing to GitHub...
set GIT_SSH_COMMAND=ssh -o StrictHostKeyChecking=no
git push -u origin main

echo Done!
pause
