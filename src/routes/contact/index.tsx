import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const isLoaded = useSignal(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    isLoaded.value = true;
  });

  return (
    <div class="bg-brand-black min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div class="mx-auto max-w-7xl">
        <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
          
          {/* Info Side */}
          <div 
            class={`flex flex-col transition-all duration-1000 ease-out ${
              isLoaded.value ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h1 class="font-display mb-8 text-5xl font-bold tracking-brand-wide text-brand-gold md:text-7xl">
              GET IN <br /> TOUCH
            </h1>
            
            <div class="space-y-12">
              <div class="flex flex-col gap-2">
                <span class="font-body text-[10px] tracking-[0.3em] text-brand-muted uppercase">Global Headquarters</span>
                <p class="font-body text-brand-text">Lagos, Nigeria</p>
              </div>

              <div class="flex flex-col gap-2">
                <span class="font-body text-[10px] tracking-[0.3em] text-brand-muted uppercase">Phone / WhatsApp</span>
                <a href="https://wa.me/2349137121451" class="font-body text-xl text-brand-text hover:text-brand-gold transition-colors">+234 913 712 1451</a>
              </div>

              <div class="flex flex-col gap-2">
                <span class="font-body text-[10px] tracking-[0.3em] text-brand-muted uppercase">Digital Presence</span>
                <div class="flex flex-col gap-3">
                  <a href="https://www.instagram.com/rexolutionvogue1" target="_blank" rel="noopener noreferrer" class="font-body text-brand-text hover:text-brand-gold transition-colors flex items-center gap-2">
                    <span class="w-20 text-[10px] tracking-widest text-brand-muted">INSTAGRAM</span>
                    <span>@rexolutionvogue1</span>
                  </a>
                  <a href="https://www.tiktok.com/@rexolutionvogue1" target="_blank" rel="noopener noreferrer" class="font-body text-brand-text hover:text-brand-gold transition-colors flex items-center gap-2">
                    <span class="w-20 text-[10px] tracking-widest text-brand-muted">TIKTOK</span>
                    <span>@rexolutionvogue1</span>
                  </a>
                  <a href="https://www.facebook.com/rexolutionvogue1" target="_blank" rel="noopener noreferrer" class="font-body text-brand-text hover:text-brand-gold transition-colors flex items-center gap-2">
                    <span class="w-20 text-[10px] tracking-widest text-brand-muted">FACEBOOK</span>
                    <span>@rexolutionvogue1</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div 
            class={`bg-brand-surface border border-brand-gold/5 p-8 md:p-12 transition-all duration-1000 delay-300 ease-out ${
              isLoaded.value ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h3 class="font-display mb-8 text-2xl font-bold tracking-wide text-brand-gold">
              SEND A MESSAGE
            </h3>
            
            <form action="#" method="POST" class="space-y-6">
              <div class="space-y-2">
                <label class="font-body text-[10px] tracking-widest text-brand-muted uppercase">Your Name</label>
                <input 
                  type="text" 
                  placeholder="AESTHETE"
                  class="bg-brand-black border-brand-gold/10 text-brand-text focus:border-brand-gold w-full border-b pb-4 pt-2 outline-none transition-colors transition-all focus:pl-2"
                />
              </div>

              <div class="space-y-2">
                <label class="font-body text-[10px] tracking-widest text-brand-muted uppercase">Email Address</label>
                <input 
                  type="email" 
                  placeholder="NAME@EXAMPLE.COM"
                  class="bg-brand-black border-brand-gold/10 text-brand-text focus:border-brand-gold w-full border-b pb-4 pt-2 outline-none transition-colors transition-all focus:pl-2"
                />
              </div>

              <div class="space-y-2">
                <label class="font-body text-[10px] tracking-widest text-brand-muted uppercase">Message</label>
                <textarea 
                  rows={4}
                  placeholder="I'M INTERESTED IN..."
                  class="bg-brand-black border-brand-gold/10 text-brand-text focus:border-brand-gold w-full border-b pb-4 pt-2 outline-none transition-colors transition-all focus:pl-2"
                ></textarea>
              </div>

              <button 
                type="submit"
                class="font-body bg-brand-gold text-brand-black hover:bg-brand-gold-light w-full py-5 text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 hover:tracking-[0.4em]"
              >
                Send Statement
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Get In Touch | Rexolution Vogue",
  meta: [
    {
      name: "description",
      content: "Connect with Rexolution Vogue for inquiries and private viewings.",
    },
    { property: "og:title", content: "Get In Touch | Rexolution Vogue" },
    { property: "og:description", content: "Connect with Rexolution Vogue for inquiries and private viewings." },
  ],
  scripts: [
    {
      props: { type: "application/ld+json" },
      script: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Get In Touch | Rexolution Vogue",
        "description": "Connect with Rexolution Vogue for inquiries and private viewings.",
        "url": "https://rexolutionvogue.com/contact"
      })
    }
  ]
};
