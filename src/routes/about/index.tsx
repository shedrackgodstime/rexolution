import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const isLoaded = useSignal(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    isLoaded.value = true;
  });

  return (
    <div class="bg-brand-black min-h-screen pt-40 pb-24 overflow-hidden">
      <div class="noise-overlay absolute inset-0 z-0 pointer-events-none opacity-[0.03]"></div>
      
      {/* ── SECTION 01: THE MANIFESTO ─────────────────────── */}
      <section class="container mx-auto px-6 md:px-12 relative z-10 mb-40">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Header & Copy */}
          <div 
            class={`lg:col-span-7 flex flex-col transition-all duration-1000 ease-out ${
              isLoaded.value ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div class="flex items-center gap-4 mb-8">
               <span class="font-body text-[10px] tracking-[0.5em] text-brand-gold uppercase">Origin — Lagos</span>
               <div class="h-px w-8 bg-brand-gold/30"></div>
            </div>

            <h1 class="font-display mb-12 text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-brand-text leading-[0.9]">
              THE <br /> <span class="text-brand-gold italic">REXOLUTION</span>
            </h1>

            <div class="font-body space-y-10 text-base md:text-lg leading-relaxed tracking-wide text-brand-muted max-w-2xl">
              <p class="text-brand-text font-medium border-l-2 border-brand-gold pl-8 py-2">
                Rexolution Vogue is not a fashion brand. It is an act of defiance against the static. 
              </p>
              <p>
                Founded on the conviction that style is the ultimate form of personal evolution, we bridge the gap between the raw, unyielding energy of street culture and the surgical discipline of high luxury. We don't build collections; we build directions.
              </p>
              <p>
                Our aesthetic is rooted in "Structured Chaos"—a tension where graffiti-weight energy meets tailored authority. Every silhouette we cut is designed to grant the wearer a sense of arrival. 
              </p>
            </div>
          </div>

          {/* Featured Editorial */}
          <div 
            class={`lg:col-span-5 relative transition-all duration-1000 delay-300 ease-out ${
              isLoaded.value ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
          >
            <div class="aspect-[4/6] overflow-hidden bg-brand-surface relative border border-brand-gold/10 rotate-1 lg:rotate-2 hover:rotate-0 transition-transform duration-700 shadow-2xl">
              <img 
                src="/ChatGPT Image Mar 13, 2026, 06_54_14 PM.png" 
                alt="Rexolution Vogue Editorial" 
                width={800}
                height={1200}
                class="h-full w-full object-cover scale-110 grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div class="absolute inset-0 bg-brand-gold/5 mix-blend-overlay"></div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 02: BRAND DNA ─────────────────────────── */}
      <section class="bg-brand-surface/50 border-y border-brand-gold/10 py-32 relative">
        <div class="container mx-auto px-6 md:px-12">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            
            <div class="flex flex-col gap-6">
              <span class="font-display text-4xl text-brand-gold italic opacity-50">01</span>
              <h3 class="font-display text-2xl text-brand-text tracking-wide uppercase">Street Luxury</h3>
              <p class="font-body text-xs leading-relaxed text-brand-muted tracking-[0.05em]">
                Authenticity over vanity. We take the grit of the pavement and refine it into a premium experience, ensuring that luxury feels lived-in and unapologetic.
              </p>
            </div>

            <div class="flex flex-col gap-6">
              <span class="font-display text-4xl text-brand-gold italic opacity-50">02</span>
              <h3 class="font-display text-2xl text-brand-text tracking-wide uppercase">Evolutionary Design</h3>
              <p class="font-body text-xs leading-relaxed text-brand-muted tracking-[0.05em]">
                Our pieces are built to evolve with the wearer. We avoid "fast-fashion" cycles in favor of intentional releases that hold their narrative weight across seasons.
              </p>
            </div>

            <div class="flex flex-col gap-6">
              <span class="font-display text-4xl text-brand-gold italic opacity-50">03</span>
              <h3 class="font-display text-2xl text-brand-text tracking-wide uppercase">The Direction</h3>
              <p class="font-body text-xs leading-relaxed text-brand-muted tracking-[0.05em]">
                Inspired by the four arrows of our mark, we are constantly moving. Direction is more important than speed. If it's not a revolution, it's not Rexolution.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 03: THE MARK ──────────────────────────── */}
      <section class="py-40 text-center container mx-auto px-6">
        <blockquote class="font-display text-4xl md:text-6xl text-brand-text leading-tight max-w-5xl mx-auto">
          "Evolve your style until it becomes your <span class="text-brand-gold italic">signature revolution.</span>"
        </blockquote>
        <div class="mt-16 flex flex-col items-center gap-4">
           <img src="/logo.png" alt="RV" width={60} height={60} class="opacity-30" />
           <p class="font-body text-[10px] tracking-[0.6em] text-brand-muted uppercase">Rexolution Vogue — Est. 2026</p>
        </div>
      </section>

    </div>
  );
});

export const head: DocumentHead = {
  title: "The Rexolution | Brand Story",
  meta: [
    {
      name: "description",
      content: "Discover the philosophy behind Rexolution Vogue. Where street energy meets high luxury discipline.",
    },
  ],
};
