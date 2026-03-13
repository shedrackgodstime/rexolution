import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const isVisible = useSignal(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const timer = setTimeout(() => {
      isVisible.value = true;
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <div class="bg-brand-black">
      {/* ── HERO SECTION ───────────────────────────────────── */}
      <section class="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden">
        {/* Noise Overlay */}
        <div class="noise-overlay absolute inset-0 z-0"></div>

        <div class="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Editorial Image */}
          <div class={`lg:col-span-4 hidden lg:block transition-all duration-1000 delay-300 ${isVisible.value ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <div class="aspect-[3/4] overflow-hidden border border-brand-gold/10 relative group">
              <img
                src="/images/editorial-hero-left.png"
                alt="Editorial Look 1"
                class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/0 transition-colors duration-700"></div>
            </div>
          </div>

          {/* Center Content */}
          <div class={`lg:col-span-4 flex flex-col items-center text-center transition-all duration-1000 ${isVisible.value ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <img
              src="/images/logo.png"
              alt="Rexolution Vogue Logo"
              class="w-32 md:w-44 h-auto mb-10"
            />
            <h1 class="font-display text-[44px] md:text-6xl lg:text-7xl font-bold tracking-[0.2em] text-brand-gold uppercase leading-[1.1] mb-6">
              Rexolution <br /> <span class="text-brand-text italic">Vogue</span>
            </h1>
            <p class="font-body text-xs md:text-sm tracking-[0.45em] text-brand-muted uppercase mb-14 px-4">
              Evolve Your Style...
            </p>
            <a
              href="/shop"
              class="font-body border border-brand-gold text-brand-gold px-14 py-5 text-[10px] font-bold tracking-[0.35em] uppercase hover:bg-brand-gold hover:text-brand-black transition-all duration-500"
            >
              The Collection
            </a>
          </div>

          {/* Right Editorial Image */}
          <div class={`lg:col-span-4 transition-all duration-1000 delay-500 ${isVisible.value ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div class="aspect-[3/4] overflow-hidden border border-brand-gold/10 relative group shadow-2xl">
              <img
                src="/images/editorial-hero-right.png"
                alt="Editorial Look 2"
                class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/0 transition-colors duration-700"></div>

              {/* Image Decal */}
              <div class="absolute bottom-4 right-4 border border-brand-gold/30 bg-brand-black/60 backdrop-blur-md px-3 py-1">
                <span class="font-body text-[8px] tracking-[0.2em] text-brand-gold uppercase">Drop 01</span>
              </div>
            </div>
          </div>
        </div>

        {/* Large Background Wordmark (Watermark style) */}
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden xl:block pointer-events-none select-none opacity-[0.02] w-full text-center">
          <span class="font-display text-[25vw] font-black text-white leading-none tracking-tighter">REVOLUTION</span>
        </div>
      </section>

      {/* ── MANIFESTO SECTION ──────────────────────────────── */}
      <section class="py-40 bg-brand-surface/30 relative">
        <div class="container mx-auto px-6 max-w-5xl">
          <div class="flex flex-col items-center text-center">

            <div class="mb-12 flex items-center gap-6">
              <div class="h-px w-12 bg-brand-gold/20"></div>
              <span class="font-body text-[10px] tracking-[0.6em] text-brand-gold uppercase">The Manifesto</span>
              <div class="h-px w-12 bg-brand-gold/20"></div>
            </div>

            <h2 class="font-display text-4xl md:text-6xl lg:text-7xl italic leading-[1.15] text-brand-text mb-16">
              "We don't create trends, we define the <span class="text-brand-gold">evolution</span> of street luxury."
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-16 text-left border-t border-brand-gold/10 pt-16">
              <div class="space-y-6">
                <h3 class="font-display text-xl text-brand-gold tracking-wide">Directional Movement</h3>
                <p class="font-body text-sm leading-relaxed text-brand-muted tracking-wide">
                  Rexolution Vogue is a bold statement in contemporary fashion. Born from the intersection of street culture and high editorial discipline, we serve the aesthete who views their wardrobe as a revolution.
                </p>
              </div>
              <div class="space-y-6">
                <h3 class="font-display text-xl text-brand-gold tracking-wide">Structured Chaos</h3>
                <p class="font-body text-sm leading-relaxed text-brand-muted tracking-wide">
                  Every stitch is intentional. Every fit is a direction. We believe style isn't about fitting init's about the unapologetic act of evolving into your most potent self.
                </p>
              </div>
            </div>

            <div class="mt-20">
              <a href="/about" class="group flex flex-col items-center gap-4">
                <span class="font-body text-[10px] tracking-[0.4em] text-brand-muted group-hover:text-brand-gold transition-colors uppercase">Discover More</span>
                <div class="h-10 w-px bg-brand-gold/40 group-hover:h-16 transition-all duration-700"></div>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Rexolution Vogue | Evolve Your Style",
  meta: [
    {
      name: "description",
      content: "Direction, movement, and revolution. Step into the world of Rexolution Vogue.",
    },
  ],
};
