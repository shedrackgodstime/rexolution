import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = (ev) => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://rexolutionvogue.vercel.app/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://rexolutionvogue.vercel.app/collection/</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://rexolutionvogue.vercel.app/about/</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://rexolutionvogue.vercel.app/contact/</loc>
    <priority>0.8</priority>
  </url>
</urlset>`.trim();
  
  const response = new Response(xml, {
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600"
    }
  });
  
  ev.send(response);
};
