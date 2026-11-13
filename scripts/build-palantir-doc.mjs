import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const targetDir = path.join(repoRoot, 'dist', 'ontology');
const required = process.env.PALANTIR_DOC_REQUIRED === '1';

function resolveSourceDir() {
  const candidates = [
    process.env.PALANTIR_DOC_DIR,
    path.join(repoRoot, '_palantir-doc'),
    path.resolve(repoRoot, '..', 'palantir-docs'),
  ].filter(Boolean);

  for (const candidate of candidates) {
    if (
      fs.existsSync(path.join(candidate, 'app', 'package.json')) &&
      fs.existsSync(path.join(candidate, 'foundry')) &&
      fs.existsSync(path.join(candidate, 'resources'))
    ) {
      return candidate;
    }
  }
  return null;
}

const sourceDir = resolveSourceDir();

if (!sourceDir) {
  const msg =
    'Could not locate palantir-doc source directory (_palantir-doc or ../palantir-docs).';
  if (required) {
    console.error(`ERROR: ${msg}`);
    process.exit(1);
  }
  console.warn(`WARN: ${msg} Skipping /ontology/ bundle assembly.`);
  process.exit(0);
}

const appDir = path.join(sourceDir, 'app');
const appDistDir = path.join(appDir, 'dist');
const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';

if (!fs.existsSync(path.join(appDir, 'node_modules'))) {
  console.log(`Installing dependencies in ${appDir}...`);
  execFileSync(npmCmd, ['ci'], { cwd: appDir, stdio: 'inherit' });
}

console.log(`Building palantir-doc app in ${appDir}...`);
execFileSync(npmCmd, ['run', 'build'], { cwd: appDir, stdio: 'inherit' });

if (!fs.existsSync(path.join(appDistDir, 'index.html'))) {
  console.error(`ERROR: Expected build output not found at ${appDistDir}`);
  process.exit(1);
}

fs.rmSync(targetDir, { recursive: true, force: true });
fs.mkdirSync(targetDir, { recursive: true });

fs.cpSync(path.join(appDistDir, 'index.html'), path.join(targetDir, 'index.html'));
fs.cpSync(path.join(appDistDir, 'assets'), path.join(targetDir, 'assets'), {
  recursive: true,
  dereference: true,
});
fs.cpSync(path.join(sourceDir, 'foundry'), path.join(targetDir, 'foundry'), {
  recursive: true,
  dereference: true,
});
fs.cpSync(path.join(sourceDir, 'resources'), path.join(targetDir, 'resources'), {
  recursive: true,
  dereference: true,
});

console.log(`Assembled /ontology/ static bundle into ${targetDir}`);
