#!/usr/bin/env python3
import subprocess
import os
import sys

repo_path = r"c:\Users\nyaor\OneDrive\Documents\crwd-phase1\crwd"

try:
    os.chdir(repo_path)
    print("📦 Staging changes...")
    subprocess.run(["git", "add", "-A"], check=True)
    
    print("💾 Committing changes...")
    subprocess.run(["git", "commit", "-m", "fix: remove platform-specific dependencies for Vercel deployment"], check=True)
    
    print("🚀 Pushing to GitHub...")
    subprocess.run(["git", "push", "origin", "main"], check=True, timeout=30)
    
    print("✅ Successfully pushed! Vercel will automatically rebuild...")
except subprocess.CalledProcessError as e:
    print(f"❌ Error: {e}")
    sys.exit(1)
except Exception as e:
    print(f"❌ Error: {e}")
    sys.exit(1)
