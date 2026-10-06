import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Actions supplies owner/repository. Locally the site uses the root path.
const [owner, repo] = (process.env.GITHUB_REPOSITORY || '').split('/');
const isUserSite = repo?.toLowerCase() === `${owner}.github.io`.toLowerCase();
const site = process.env.SITE_URL || (owner ? `https://${owner}.github.io` : 'http://localhost:4321');
const base = process.env.BASE_PATH || (repo && !isUserSite ? `/${repo}/` : '/');

export default defineConfig({
  site,
  base,
  output: 'static',
  devToolbar: { enabled: false },
  trailingSlash: 'always',
  vite: { plugins: [tailwindcss()] },
});


