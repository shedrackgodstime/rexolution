import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import ImgLogo from '~/media/logo.png?jsx';

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "SHOP", href: "/shop" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

const socials = [
  { handle: "@rexolutionvogue1", label: "IG" },
  { handle: "@rexolutionvogue1", label: "TT" },
];

export default component$(() => {
  const isScrolled = useSignal(false);
  const isMobileMenuOpen = useSignal(false);
  const location = useLocation();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const onScroll = () => { isScrolled.value = window.scrollY > 40; };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <>
      {/* ── NAVBAR ─────────────────────────────────────────── */}
      <nav
        class={[
          "fixed top-0 left-0 z-50 w-full transition-all duration-500",
          isScrolled.value
            ? "bg-brand-black/95 backdrop-blur-md border-b border-brand-gold/20 py-2"
            : "bg-transparent py-5",
        ].join(" ")}
      >
        <div class="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">

          {/* Wordmark  logo mark + brand name */}
          <Link
            href="/"
            class="group flex items-center gap-3"
            aria-label="Rexolution Vogue"
          >
            {/* Logo mark  shrinks on scroll */}
            <ImgLogo
              alt="RV"
              class={`transition-all duration-500 group-hover:[filter:drop-shadow(0_0_10px_#D4A017)] ${isScrolled.value ? "h-10 w-auto" : "h-16 w-auto"
                }`}
            />

            {/* Brand name  slightly shrinks with logo */}
            <div class={`flex flex-col leading-none transition-all duration-500 ${isScrolled.value ? "gap-[1px]" : "gap-[2px]"}`}>
              <span class={`font-display font-bold tracking-[0.25em] text-brand-text group-hover:text-brand-text transition-all duration-300 uppercase ${isScrolled.value ? "text-[11px]" : "text-[14px]"}`}>
                Rexolution
              </span>
              <span class={`font-display italic tracking-[0.3em] text-brand-gold ${isScrolled.value ? "text-[11px]" : "text-[14px]"}`}>
                Vogue
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div class="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => {
              const isActive = location.url.pathname === link.href || (link.href !== "/" && location.url.pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  class={`group relative font-body text-[11px] font-medium tracking-brand transition-colors duration-300 ${isActive ? "text-brand-text" : "text-brand-text/50 hover:text-brand-text"
                    }`}
                >
                  {link.name}
                  <span class={`absolute -bottom-1 left-0 h-px bg-brand-gold transition-all duration-300 ${isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`} />
                </Link>
              );
            })}
          </div>

          {/* Mobile menu trigger  Stylized "MENU" */}
          <button
            class="group flex items-center gap-3 md:hidden"
            onClick$={() => (isMobileMenuOpen.value = true)}
            aria-label="Open menu"
          >
            <span class="font-body text-[10px] tracking-[0.3em] text-brand-gold transition-colors group-hover:text-brand-text uppercase leading-none mt-0.5">
              Menu
            </span>
            <div class="flex flex-col gap-[5px]">
              <span class={`block h-px w-6 bg-brand-gold transition-all ${isMobileMenuOpen.value ? "w-4" : "w-6"}`} />
              <span class={`block h-px w-4 bg-brand-gold transition-all ${isMobileMenuOpen.value ? "w-6" : "w-4"}`} />
            </div>
          </button>

        </div>
      </nav>

      {/* ── MOBILE OVERLAY ─────────────────────────────────── */}
      <div
        class={[
          "fixed inset-0 z-[60] flex flex-col bg-brand-black transition-all duration-700 ease-in-out",
          isMobileMenuOpen.value
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-8 pointer-events-none",
        ].join(" ")}
      >
        {/* Top  full wordmark + close */}
        <div class="flex items-center justify-between px-6 py-8">
          <div class="flex items-center gap-3">
            <ImgLogo
              alt="RV"
              class="h-10 w-auto"
            />
            <div class="flex flex-col leading-none gap-[1px]">
              <span class="font-display text-[11px] font-bold tracking-[0.2em] text-brand-text uppercase">
                Rexolution
              </span>
              <span class="font-display text-[11px] italic tracking-[0.2em] text-brand-gold">
                Vogue
              </span>
            </div>
          </div>
          <button
            onClick$={() => (isMobileMenuOpen.value = false)}
            aria-label="Close menu"
            class="flex items-center gap-2 text-brand-muted hover:text-brand-gold transition-colors duration-300"
          >
            <span class="font-body text-[9px] tracking-[0.2em] uppercase">Close</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Thin gold divider */}
        <div class="mx-6 h-px bg-brand-gold/10" />

        {/* Center  nav links with staggered slide animation */}
        <div class="flex flex-1 flex-col items-start justify-center gap-8 px-10">
          {navLinks.map((link, i) => {
            const isActive = location.url.pathname === link.href || (link.href !== "/" && location.url.pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick$={() => (isMobileMenuOpen.value = false)}
                class={`font-display text-5xl font-bold tracking-brand transition-all duration-700 ${isMobileMenuOpen.value ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                  } ${isActive ? "text-brand-gold" : "text-brand-text hover:text-brand-gold"}`}
                style={`transition-delay: ${200 + i * 80}ms`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Bottom  tagline + socials */}
        <div
          class={`px-10 pb-12 flex flex-col gap-6 transition-all duration-1000 delay-500 ${isMobileMenuOpen.value ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
        >
          <div class="h-px w-12 bg-brand-gold/40" />
          <p class="font-body text-xs tracking-brand text-brand-muted">
            Evolve Your Style...
          </p>
          <div class="flex flex-wrap gap-x-8 gap-y-2">
            {socials.map((s) => (
              <span
                key={s.label}
                class="font-body text-[10px] tracking-brand text-brand-muted hover:text-brand-gold transition-colors duration-300 cursor-pointer"
              >
                {s.label}  {s.handle}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});
