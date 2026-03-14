import type { RequestHandler } from "@builder.io/qwik-city";
import { routes } from "@qwik-city-plan";
import { createSitemap } from "./create-sitemap";

export const onGet: RequestHandler = (ev) => {
  const allRoutes = routes.map(([route]) => route as string);
  
  // Filter for clean static routes
  const staticRoutes = allRoutes.filter(route => 
    route !== "/" && 
    !route.includes("*") && 
    !route.includes(":") &&
    !route.includes("sitemap.xml")
  );

  const entries = [
    { loc: "/", priority: 1.0 },
    ...staticRoutes.map(route => ({
      loc: route.endsWith("/") ? route : `${route}/`,
      priority: 0.9
    }))
  ];

  const sitemap = createSitemap(entries);

  const response = new Response(sitemap, {
    status: 200,
    headers: { 
      "Content-Type": "application/xml; charset=utf-8",
      "X-Content-Type-Options": "nosniff"
    },
  });

  ev.send(response);
};
