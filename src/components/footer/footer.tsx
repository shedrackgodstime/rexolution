import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { siteConfig } from "~/site.config";

export default component$(() => {
  return (
    <footer class="bg-brand-black border-t border-brand-gold/5 px-6 py-12 md:px-12">
      <div class="mx-auto flex max-w-7xl flex-col items-center gap-8">
        
        {/* Brand Marking */}
        <div class="flex flex-col items-center gap-2">
          <h2 class="font-display text-xl font-bold tracking-brand-wide text-brand-gold">
            REXOLUTION VOGUE
          </h2>
          <p class="font-body text-[10px] tracking-brand text-brand-muted uppercase">
            Evolve Your Style...
          </p>
        </div>

        {/* Social Icons Placeholder (SVGs) */}
        <div class="flex items-center gap-6">
          <a href={siteConfig.socials.tiktok} target="_blank" rel="noopener noreferrer" class="text-brand-muted hover:text-brand-gold transition-colors duration-300" aria-label="TikTok">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
          </a>
          <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" class="text-brand-muted hover:text-brand-gold transition-colors duration-300" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer" class="text-brand-muted hover:text-brand-gold transition-colors duration-300" aria-label="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </a>
        </div>

        {/* Legal / Copyright */}
        <div class="flex flex-col items-center gap-4 text-center">
          <p class="font-body text-[10px] tracking-[0.15em] text-brand-muted uppercase">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div class="flex gap-4 text-[9px] tracking-widest text-brand-muted/50 uppercase">
            <Link href="#" class="hover:text-brand-gold">Privacy Policy</Link>
            <Link href="#" class="hover:text-brand-gold">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
});
