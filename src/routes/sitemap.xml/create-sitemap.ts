import { siteConfig } from "../../site.config";

export interface SitemapEntry {
  loc: string;
  priority: number;
}

export function createSitemap(entries: SitemapEntry[]) {
  const baseUrl = siteConfig.url;

  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.map((entry) => `<url><loc>${baseUrl}${entry.loc.startsWith("/") ? "" : "/"}${entry.loc}</loc><priority>${entry.priority.toFixed(1)}</priority></url>`).join('')}</urlset>`.trim();
}
