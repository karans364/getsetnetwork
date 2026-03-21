const { execSync } = require('child_process');
const fs = require('fs');
try {
  execSync('npx nuxi build', { encoding: 'utf-8', stdio: 'pipe' });
  console.log('Build passed');
} catch (e) {
  const log = "STDOUT:\n" + e.stdout.toString() + "\nSTDERR:\n" + e.stderr.toString();
  fs.writeFileSync('build_err.log', log);
  console.log('Build failed, wrote to build_err.log');
}
