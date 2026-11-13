import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

const MIME_TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
};

function resolveLocalPalantirDir(rootDir: string): string | null {
  const candidates = [
    process.env.PALANTIR_DOC_DIR,
    path.resolve(rootDir, '_palantir-doc'),
    path.resolve(rootDir, '..', 'palantir-docs'),
  ].filter((v): v is string => Boolean(v));

  return (
    candidates.find((dir) =>
      fs.existsSync(path.join(dir, 'app', 'dist', 'index.html'))
    ) ?? null
  );
}

function createPalantirDocMiddleware(rootDir: string) {
  return (req: any, res: any, next: any) => {
    const rawUrl = req.url || '';
    const [cleanUrl, query] = rawUrl.split('?');

    if (cleanUrl === '/ontology') {
      res.statusCode = 302;
      res.setHeader('Location', `/ontology/${query ? `?${query}` : ''}`);
      res.end();
      return;
    }

    if (!cleanUrl.startsWith('/ontology/')) {
      return next();
    }

    const assembledIndex = path.join(rootDir, 'dist', 'ontology', 'index.html');
    const relSubPath = decodeURIComponent(cleanUrl.slice('/ontology/'.length));

    const sourceDir = resolveLocalPalantirDir(rootDir);
    if (!sourceDir) {
      if (fs.existsSync(assembledIndex)) return next();
      return next();
    }

    let baseDir: string;
    let fileRel = relSubPath;
    if (!fileRel || fileRel === 'index.html') {
      baseDir = path.join(sourceDir, 'app', 'dist');
      fileRel = 'index.html';
    } else if (fileRel.startsWith('foundry/') || fileRel.startsWith('resources/')) {
      baseDir = sourceDir;
    } else {
      baseDir = path.join(sourceDir, 'app', 'dist');
    }

    const resolvedBase = path.resolve(baseDir);
    const targetPath = path.resolve(resolvedBase, fileRel);
    if (!targetPath.startsWith(resolvedBase + path.sep)) {
      res.statusCode = 403;
      res.end('Forbidden');
      return;
    }

    if (fs.existsSync(targetPath) && fs.statSync(targetPath).isFile()) {
      const ext = path.extname(targetPath).toLowerCase();
      res.setHeader('Content-Type', MIME_TYPES[ext] || 'application/octet-stream');
      fs.createReadStream(targetPath).pipe(res);
      return;
    }

    next();
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'serve-local-palantir-doc',
        configureServer(server) {
          server.middlewares.use(createPalantirDocMiddleware(__dirname));
        },
        configurePreviewServer(server) {
          server.middlewares.use((req, res, next) => {
            const [cleanUrl, query] = (req.url || '').split('?');
            if (cleanUrl === '/ontology') {
              res.statusCode = 302;
              res.setHeader('Location', `/ontology/${query ? `?${query}` : ''}`);
              res.end();
              return;
            }
            const distIndex = path.join(__dirname, 'dist', 'ontology', 'index.html');
            if (fs.existsSync(distIndex)) {
              return next();
            }
            return createPalantirDocMiddleware(__dirname)(req, res, next);
          });
        },
      },
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
