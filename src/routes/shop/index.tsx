import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { products } from "~/data/products";

export default component$(() => {
  const isLoaded = useSignal(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    isLoaded.value = true;
  });

  return (
    <div class="bg-brand-black min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div class="mx-auto max-w-7xl">
        {/* Header */}
        <header class="mb-16 flex flex-col items-center">
          <h1 class="font-display text-4xl font-bold tracking-brand-wide text-brand-gold md:text-5xl lg:text-6xl text-center">
            THE COLLECTION
          </h1>
          <div class="bg-brand-gold/30 mt-6 h-px w-24"></div>
        </header>

        {/* Product Grid */}
        <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={product.id}
              class={`group relative flex flex-col transition-all duration-1000 ease-out ${
                isLoaded.value ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div class="relative mb-6 aspect-[4/5] overflow-hidden bg-brand-surface">
                <product.image
                  alt={product.name}
                  class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-brand-black/0 transition-colors duration-500 group-hover:bg-brand-black/20"></div>
                
                {/* Category Badge */}
                <div class="absolute left-4 top-4 border-l border-brand-gold pl-2">
                  <span class="font-body text-[10px] tracking-[0.2em] text-brand-gold uppercase">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div class="flex flex-col gap-1 px-1">
                <h3 class="font-display text-lg font-bold tracking-wide text-brand-text">
                  {product.name}
                </h3>
                <p class="font-body text-sm font-medium tracking-brand text-brand-gold">
                  {product.price}
                </p>
              </div>

              {/* Action Button */}
              <a
                href={`https://wa.me/23400137121451?text=${encodeURIComponent(product.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                class="font-body mt-6 border-brand-gold/20 text-brand-gold hover:border-brand-gold hover:bg-brand-gold hover:text-brand-black w-full py-3 text-center text-[10px] font-bold tracking-brand-wide transition-all duration-500 border uppercase"
              >
                Inquire via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "The Collection | Rexolution Vogue",
  meta: [
    {
      name: "description",
      content: "Explore the latest street luxury pieces from Rexolution Vogue. Evolve your style.",
    },
  ],
};
