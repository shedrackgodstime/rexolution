import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce server load
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max age for browser and CDN
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      <Navbar />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
