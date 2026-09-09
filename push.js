const { execSync } = require('child_process');
const path = require('path');

const repoPath = path.resolve('c:\\Users\\nyaor\\OneDrive\\Documents\\crwd-phase1\\crwd');

try {
  process.chdir(repoPath);
  
  console.log('📦 Staging changes...');
  execSync('git add -A', { stdio: 'inherit' });
  
  console.log('\n💾 Committing changes...');
  execSync('git commit -m "fix: remove platform-specific dependencies for Vercel deployment"', { stdio: 'inherit' });
  
  console.log('\n🚀 Pushing to GitHub...');
  execSync('git push origin main', { stdio: 'inherit' });
  
  console.log('\n✅ Successfully pushed! Vercel will automatically rebuild...');
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
