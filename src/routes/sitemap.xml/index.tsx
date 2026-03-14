import type { RequestHandler } from "@builder.io/qwik-city";
import { siteConfig } from "../../site.config";

export const onGet: RequestHandler = (ev) => {
  const baseUrl = siteConfig.url.endsWith("/") 
    ? siteConfig.url.slice(0, -1) 
    : siteConfig.url;

  const urls = siteConfig.pages.map(page => {
    const path = page.path.startsWith("/") ? page.path : `/${page.path}`;
    return `
  <url>
    <loc>${baseUrl}${path}</loc>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`;
  }).join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`.trim();

  const response = new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "public, max-age=3600, s-maxage=3600"
    },
  });

  ev.send(response);
};
