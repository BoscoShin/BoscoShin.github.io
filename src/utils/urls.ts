// All public assets and local resource links honor GitHub Pages' repository base.
export function assetUrl(path: string): string {
  if (/^(https?:|mailto:|tel:|data:|#)/i.test(path)) return path;
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
